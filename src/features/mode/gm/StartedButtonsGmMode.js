import React from 'react';
import { useSelector } from 'react-redux';
import { Button, ButtonGroup } from '@mui/material/';
import * as modeConst from 'features/mode/modeConst';
import * as variantConst from 'features/mode/variantConst';
import WsAction from 'features/ws/WsAction';

const StartedButtonsGmMode = () => {
  const state = useSelector(state => state);

  if (state.gmMode.active) {
    if (state.gmMode.tables.panel.open) {
      return (
        <ButtonGroup
          sx={{ mt: 1.5 }}
          size="small"
          aria-label="Game Buttons"
          orientation="vertical"
          fullWidth={true}
        >
          <Button
            id="StartedButtonsGmMode-Button-undoMove"
            disabled={state.panel.history.back !== 0}
            onClick={() => WsAction.start(variantConst.CLASSICAL, modeConst.PGN, {
              movetext: state.gmMode.gm.movetext
            })}
          >
            View Game
          </Button>
        </ButtonGroup>
      );
    }
  }

  return null;
}

export default StartedButtonsGmMode;
