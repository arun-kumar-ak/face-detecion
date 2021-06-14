import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TextField, Button, Paper, CircularProgress } from '@material-ui/core';

import './Urlbar.scss';
import ImgButton from '../../assets/face_scan_icon_149480.png';
import { IMG_URL } from '../../redux/constants';
import { faceDetect } from '../../redux/actions/faceDetectionAction';

const Urlbar = () => {
    const dispatch = useDispatch();
    const urlData = useSelector(state => state.urlData)
    return (
        <div className="urlbar-root">
            <Paper className="paper">
                <TextField 
                    onChange={(e) => {
                        dispatch({type: IMG_URL, payload: e.target.value})
                        
                    }} 
                    label="Paste your image URL here" 
                    className="urlbar" 
                    color="primary" 
                    variant="outlined" />
                <Button 
                    onClick={() => {
                        dispatch(faceDetect(`face-detect/?url=${urlData.url}`))
                    }}
                    variant="contained" color="secondary" className="button"
                >    
                    { urlData.urlIsPending ? <CircularProgress size={30} /> :<img alt="img-button" src={ImgButton} className="img-button" /> }
                </Button>
            </Paper>
        </div>
    )
}

export default Urlbar;