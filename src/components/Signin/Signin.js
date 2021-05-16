import React from 'react';
import { Link } from 'react-router-dom';

import { Button,FormControl, TextField, IconButton, Input, InputLabel, InputAdornment } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

import './Signin.scss';

const Signin = () =>{
    return (
        <form className="grid-parent" noValidate autoComplete="off">
            <TextField
                id="standard-basic"
                label="Email"
                type="email"
                className="input-field mt"
            />
            <FormControl className="input-field mt">
                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <Input
                    id="standard-adornment-password"
                    type='password'
                    className=""
                    // value={values.password}
                    endAdornment={
                        <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                        >
                            {false? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
            <Link to="/home" ><Button variant="contained" size="large" color="secondary" className="mt">SignIn</Button></Link>
            <p>If you are new to Here <Link to="/register">Register</Link></p>
        </form>
    );
}

export default Signin;