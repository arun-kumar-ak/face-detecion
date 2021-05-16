import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Button,FormControl, TextField, IconButton, Input, InputLabel, InputAdornment } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';

import '../Signin/Signin.scss';

import { connect } from 'react-redux';
import { formHandler } from '../../redux/actions';
import { IS_EMAIL, IS_PASSWORD, IS_EMAIL_VALID, IS_SHOW_PASSWORD } from '../../redux/constants';

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        formHandler: (data, type) => dispatch(formHandler(data, type))
    }    
}

class Register extends Component {
    onFormHandler = (e) => {
        e.preventDefault();
        if(e.target.name === 'email') {
            this.props.formHandler(e.target.value,IS_EMAIL)
        }else {
            this.props.formHandler(e.target.value, IS_PASSWORD)
        }
    }

    emailValidate = ()=> {
        !this.props.formData.email.length ? this.props.formHandler(true, IS_EMAIL_VALID): this.props.formHandler(false, IS_EMAIL_VALID)
    }

    handleClickShowPassword = () => {
        this.props.formHandler(!this.props.formData.validation.showPassword, IS_SHOW_PASSWORD)
    }

    render() {
        const { formData } = this.props;

        return (
            <form className="grid-parent" noValidate autoComplete="off" >
                <TextField
                    id='standard-basic'
                    label="Email"
                    type="email"
                    name="email"
                    error={formData.validation.isEmailValid}
                    helperText={formData.validation.isEmailValid? "Enter valid email":"     "}
                    className="input-field mt"
                    onChange={this.onFormHandler}
                    onBlur = {this.emailValidate}
                />
                <FormControl className="input-field mt">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={formData.validation.showPassword? 'text' : 'password'}
                        className=""
                        name="password"
                        onChange={this.onFormHandler}
                        endAdornment={
                            <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={this.handleClickShowPassword}
                            >
                                {formData.validation.showPassword? <Visibility /> : <VisibilityOff />}
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
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);