import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import * as navConst from 'features/nav/navConst';
import * as nav from 'features/nav/navSlice';
const SettingsMenu = () => {
  const state = useSelector(state => state.nav);

  const dispatch = useDispatch();

  return (
    <>
      <Button
        id="Nav-settings"
        sx={{ pl: 2, borderRadius: 0, justifyContent: 'flex-start' }}
        variant={state.name === navConst.SETTINGS ? "contained" : "text"}
        startIcon={<SettingsIcon />}
        onClick={() => dispatch(nav.settingsDialog({ open: true }))}
      >
        Settings
      </Button>
    </>
  );
}

export default SettingsMenu;
