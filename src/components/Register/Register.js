import React from 'react';
import { Link } from 'react-router-dom';

import { Button,FormControl, TextField, IconButton, Input, InputLabel, InputAdornment } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

import '../Signin/Signin.scss';

const Register = () =>{
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
            <Button variant="contained" size="large" color="secondary" className="mt">Register</Button>
            <p>Already have account <Link to="/">SignIn</Link></p>
        </form>
    );
}

export default Register;