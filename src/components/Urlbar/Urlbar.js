import React from 'react';

import { TextField, Button, Paper } from '@material-ui/core';

import './Urlbar.scss';

const Urlbar = () => {
    return (
        <div className="urlbar-root">
            <Paper className="paper" >
                <TextField label="Paste your image URL here" className="urlbar" color="primary" variant="outlined" />
                <Button variant="contained" color="primary" className="button">
                    Click
                </Button>
            </Paper>
        </div>
    )
}

export default Urlbar;