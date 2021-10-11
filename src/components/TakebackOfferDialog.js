import React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { wsMssgTakeback } from '../actions/serverActions';
import takebackOfferDialogActionTypes from '../constants/takebackAcceptDialogActionTypes';
import modeActionTypes from '../constants/modeActionTypes';

const TakebackOfferDialog = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const handleTakebackOffer = (event) => {
    event.preventDefault();
    wsMssgTakeback(state, 'propose').then((data) => {
      dispatch({ type: modeActionTypes.TAKEBACK_PROPOSE });
      dispatch({ type: takebackOfferDialogActionTypes.CLOSE });
    });
  }

  return (
    <Dialog open={state.takebackOfferDialog.open} maxWidth="sm" fullWidth={true}>
      <DialogTitle>Request a takeback</DialogTitle>
      <DialogContent>
        <form onSubmit={handleTakebackOffer}>
          <DialogActions>
            <Button type="submit">
              Accept
            </Button>
            <Button onClick={() => dispatch({ type: takebackOfferDialogActionTypes.CLOSE })}>
              Cancel
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default TakebackOfferDialog;
