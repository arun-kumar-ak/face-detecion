import React from 'react';
import { Link } from 'react-router-dom';

import { Button,FormControl, TextField, IconButton, Input, InputLabel, InputAdornment } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

import './Signin.scss';

import { useSelector, useDispatch } from 'react-redux';
import { formHandler } from '../../redux/actions';
import { IS_EMAIL, IS_PASSWORD, IS_EMAIL_VALID, IS_SHOW_PASSWORD } from '../../redux/constants';

var email_len_cnt=0;
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const Signin = () =>{
    const formData = useSelector(state => state.formData);
    const dispatch = useDispatch();

    const onFormHandler = (e) => {
        e.preventDefault();
        if(e.target.name === 'email') {
            dispatch(formHandler(e.target.value,IS_EMAIL))
            if(email_len_cnt > 0) {
                dispatch(formHandler([false,''], IS_EMAIL_VALID))
                email_len_cnt=0;
            }
        }else {
            dispatch(formHandler(e.target.value, IS_PASSWORD))
        }
    }

    const emailValidate = ()=> {
        email_len_cnt=email_len_cnt+1;
        if(formData.email.length === 0) {
            dispatch(formHandler([true,'*required'], IS_EMAIL_VALID))
            return
        }
        if(!emailPattern.test(formData.email)) {
            dispatch(formHandler([true,'enter valid email id'], IS_EMAIL_VALID))   
        }
    }

    return (
        <form className="grid-parent" noValidate autoComplete="off">
            <TextField
                id='standard-basic'
                label="Email"
                type="email"
                name="email"
                error={formData.validation.isEmailValid}
                helperText={formData.validation.isEmailValid? formData.validation.emailErrorMsg:"     "}
                className="input-field mt"
                onChange={onFormHandler}
                onBlur = {emailValidate}
            />
            <FormControl className="input-field mt">
                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <Input
                    id="standard-adornment-password"
                    type={formData.validation.showPassword? 'text' : 'password'}
                    className=""
                    name="password"
                    onChange={onFormHandler}
                    endAdornment={
                        <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => dispatch(formHandler(!formData.validation.showPassword, IS_SHOW_PASSWORD)) }
                        >
                            {formData.validation.showPassword? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
            <Button variant="contained" size="large" color="secondary" className="mt">SignIn</Button>
            <p>If you are new to Here <Link to="/register">Register</Link></p>
        </form>
    );
}

export default Signin;