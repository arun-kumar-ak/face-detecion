import React from 'react';

import { InputBase, Paper, Button, ButtonGroup } from '@material-ui/core';

import './Urlbar.scss';

const Urlbar = () => {
    return (
        <div className="root">
            <Paper style={{backgroundColor: "lightblue"}} elevation={3} className="paper">
                <ButtonGroup>
                    <InputBase
                        className="input"
                        placeholder="Enter your image URL"
                    />
                    <Button
                    className="button">Click</Button>
                </ButtonGroup>
            </Paper>
        </div>
    )
}

export default Urlbar;