import React from 'react';

import { AppBar, Toolbar, Button } from '@material-ui/core';

import UserDialog from '../UserDialog/UserDialog';
import './Topbar.scss';
import FaceIcon from '../../assets/face-scan.png';

const Topbar = () => {
    return (
        <div className="topbar-root">
            <AppBar className="appbar">
                <img alt="face-logo" src={FaceIcon} className="img-logo" />
                <Toolbar className="toolbar">
                    <UserDialog />
                    <Button variant="contained" className="button" color="inherit" >Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Topbar;