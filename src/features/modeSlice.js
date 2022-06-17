import { createSlice } from '@reduxjs/toolkit';
import Wording from '../common/Wording.js';
import {
  MODE_ANALYSIS,
  MODE_GRANDMASTER,
  MODE_LOADFEN,
  MODE_LOADPGN,
  MODE_PLAY
} from './modeConstants';

const initialState = {
  name: MODE_ANALYSIS
};

const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    startAnalysis: () => initialState,
    startLoadFen: () => { name: MODE_LOADFEN },
    startLoadPgn: () => { name: MODE_LOADPGN },
    setGrandmaster(state, action) {
      state.name = MODE_GRANDMASTER;
      state.grandmaster = action.payload;
    },
    setPlay(state, action) {
      state.name = MODE_PLAY;
      state.play = action.payload;
    },
    grandmasterMovetext(state, action) {
      state.grandmaster.movetext = action.payload.movetext;
    },
    acceptPlay(state) {
      const expiryTimestamp = new Date();
      expiryTimestamp.setSeconds(
        expiryTimestamp.getSeconds() + parseInt(state.play.jwt_decoded.min) * 60
      );
      state.play.accepted = true;
      state.play.timer = {
        expiry_timestamp: expiryTimestamp,
        over: null
      };
    },
    acceptTakeback(state) {
      state.play.takeback = Wording.verb.ACCEPT.toLowerCase();
    },
    declineTakeback(state) {
      state.play.takeback = null;
    },
    proposeTakeback(state) {
      state.play.takeback = Wording.verb.PROPOSE.toLowerCase();
    },
    acceptDraw(state) {
      state.play.draw = Wording.verb.ACCEPT.toLowerCase();
    },
    declineDraw(state) {
      state.play.draw = null;
    },
    proposeDraw(state) {
      state.play.draw = Wording.verb.PROPOSE.toLowerCase();
    },
    acceptResign(state) {
      state.play.resign = Wording.verb.ACCEPT.toLowerCase();
    },
    timeOver(state, action) {
      state.play.timer.over = action.payload.color;
    },
    rematchAccept(state) {
      state.play.rematch = Wording.verb.ACCEPT.toLowerCase();
    },
    declineRematch(state) {
      state.play.rematch = null;
    },
    proposeRematch(state) {
      state.play.rematch = Wording.verb.PROPOSE.toLowerCase();
    },
    acceptLeave(state) {
      state.play.leave = Wording.verb.ACCEPT.toLowerCase();
    }
  }
});

export const {
  startAnalysis,
  setGrandmaster,
  startLoadFen,
  startLoadPgn,
  setPlay,
  grandmasterMovetext,
  acceptPlay,
  acceptTakeback,
  declineTakeback,
  proposeTakeback,
  acceptDraw,
  declineDraw,
  proposeDraw,
  acceptResign,
  timeOver,
  rematchAccept,
  declineRematch,
  proposeRematch,
  acceptLeave
} = modeSlice.actions;
export default modeSlice.reducer;