import React from 'react';

import { AppBar, Toolbar, Button } from '@material-ui/core';

import UserDialog from '../UserDialog/UserDialog';
import './Topbar.scss';

const Topbar = () => {
    return (
        <div className="root">
            <AppBar color="secondary" className="appbar">
                <Toolbar className="toolbar">
                    <UserDialog />
                    <Button variant="contained" className="button" color="inherit" >Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Topbar;