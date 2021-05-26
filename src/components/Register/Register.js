import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import { Button,FormControl, TextField, IconButton, Input, InputLabel, InputAdornment, FormHelperText, Collapse } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import PersonIcon from '@material-ui/icons/Person';
import CloseIcon from '@material-ui/icons/Close';
import Alert from '@material-ui/lab/Alert';
import GoogleButton from 'react-google-button';

import '../Signin/Signin.scss';

import { useSelector, useDispatch } from 'react-redux';
import { formHandler,formSubmit } from '../../redux/actions';
import { IS_EMAIL, IS_PASSWORD, IS_CONFIRM_PASSWORD, IS_EMAIL_VALID, IS_SHOW_PASSWORD,IS_PASSWORD_VALID,IS_NAME,RESET,IS_ALERT_OPEN } from '../../redux/constants';

var email_len_cnt = 0;
var password_len_cnt = 0;
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const Register = () => {
    const state = useSelector(state => state)
    const formData = state.formData;
    const responseData = state.responseData;
    const dispatch = useDispatch();

    const onFormHandler = (e) => {
        e.preventDefault();
        if(e.target.name === 'email') {
            dispatch(formHandler(e.target.value,IS_EMAIL))
            if(email_len_cnt > 0) {
                dispatch(formHandler([false,''], IS_EMAIL_VALID))
                email_len_cnt=0;
            }
        }else if(e.target.name === 'password'){
            dispatch(formHandler(e.target.value, IS_PASSWORD))
            if(password_len_cnt > 0) {
                dispatch(formHandler([false,''], IS_PASSWORD_VALID))
                password_len_cnt=0;
            }
        }else if(e.target.name === 'confirm-password') {
            dispatch(formHandler(e.target.value, IS_CONFIRM_PASSWORD))
            if(password_len_cnt > 0) {
                dispatch(formHandler([false,''], IS_PASSWORD_VALID))
                password_len_cnt=0;
            }
        }else {
            dispatch(formHandler(e.target.value,IS_NAME))
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

    const passwordValidate = () => {
        password_len_cnt = password_len_cnt + 1;
        if(formData.password.length === 0) {
            dispatch(formHandler([true,'*required'], IS_PASSWORD_VALID))
            return
        }
        if(formData.password.length < 8) {
            dispatch(formHandler([true,'password must greater than 8 characters'], IS_PASSWORD_VALID))
        }
    }

    const passwordConfirmValidate = () => {
        password_len_cnt = password_len_cnt + 1;
        if(formData.password.length === 0) {
            dispatch(formHandler([true,'*required'], IS_PASSWORD_VALID))
            return
        }
        if(formData.password !== formData.validation.isConfirmPassword) {
            dispatch(formHandler([true,'password doesn\'t match'], IS_PASSWORD_VALID))
        }
    }

    const onFormSubmit = () => {
        if((formData.validation.isEmailValid && formData.validation.isPasswordValid ) || formData.username.length > 0) {
            let bodyData = {
                username: formData.username,
                email: formData.email,
                password: formData.password
            }
            dispatch(formSubmit(bodyData,'register'))
        }
    }

    if(!responseData.isPending && responseData.data.successMsg === 'register successfully') {
        return <Redirect to='/home' />
    }

    return (
        <form className="grid-parent" noValidate autoComplete="off" >
            <PersonIcon color="secondary" style={{ fontSize: 70 }} className="mt" />
            <Collapse in={formData.validation.isAlertOpen}>
                <Alert
                    severity={formData.validation.isAlertError ? "error" : "warning"}
                    action={
                        <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => dispatch(formHandler([!formData.validation.isAlertOpen, false, ''], IS_ALERT_OPEN))}
                        >
                        <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                >
                {formData.validation.alertMsg}
                </Alert>
            </Collapse>
            <TextField 
                id="standard-basic"
                label="Username"
                type="text"
                name="username"
                value = {responseData.data.user ? responseData.data.user.username : formData.username}
                className="input-field mt"
                onChange={onFormHandler}
            />
            <TextField
                id='standard-basic'
                label="Email"
                type="email"
                name="email"
                value = {responseData.data.user ? responseData.data.user.email : formData.email}
                error={formData.validation.isEmailValid}
                helperText={formData.validation.isEmailValid? formData.validation.emailErrorMsg:"     "}
                className="input-field"
                onChange={onFormHandler}
                onBlur = {emailValidate}
            />
            <FormControl className="input-field" error={formData.validation.isPasswordValid}>
                <InputLabel htmlFor="standard-adornment-password" >Password</InputLabel>
                <Input
                    id="standard-adornment-password"
                    type={formData.validation.showPassword? 'text' : 'password'}
                    className=""
                    name="password"
                    onChange={onFormHandler}
                    onBlur={passwordValidate}
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
                <FormHelperText id="component-helper-text">{formData.validation.passwordErrorMsg}</FormHelperText>
            </FormControl>
            <FormControl className="input-field mt" error={formData.validation.isPasswordValid}>
                <InputLabel htmlFor="standard-adornment-password" >Confirm password</InputLabel>
                <Input
                    id="standard-adornment-password"
                    type={formData.validation.showPassword? 'text' : 'password'}
                    className=""
                    name="confirm-password"
                    onChange={onFormHandler}
                    onBlur={passwordConfirmValidate}
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
                <FormHelperText id="component-helper-text">{formData.validation.passwordErrorMsg}</FormHelperText>
            </FormControl>
            <Button variant="contained" size="large" color="secondary" className="mt" onClick={onFormSubmit}>Register</Button>
            <p>Already have an account <Link to="/"><span onClick={() => dispatch(formHandler('',RESET))}>SignIn</span></Link></p>
            <p>or</p>
            <GoogleButton
                type="light"
                onClick={() => { console.log('Google button clicked') }}
            />
        </form>
    );
}

export default Register;