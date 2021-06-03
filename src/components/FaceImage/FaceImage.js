import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { IMG_WIDTH } from '../../redux/constants';

import './FaceImage.scss';

import emptyImg from '../../assets/empty.jpg';
const FaceImage = () => {
    const urlData = useSelector(state => state.urlData)
    const dispatch = useDispatch();

    const onimgload = ({target: img}) => {
        console.log(img.offsetWidth)
        dispatch({type: IMG_WIDTH, payload: img.offsetWidth})
    }

    let width = urlData.imgWidth;
    return (
        <div className="face-img-root">
            <div style={{position: 'relative'}} >
                <img
                    src={urlData.isUrl ? urlData.url : emptyImg}
                    className="face-img"
                    alt="face detect img"
                    onLoad={onimgload}
                    onChange={onimgload}
                />
                {urlData.imgBoxData.boxData ? 
                    urlData.imgBoxData.boxData.map((boxData,key) => (
                        <div key={key} className="bounding-box"
                            style={{
                                top: boxData.top_row*width,
                                right: width-boxData.right_col*width,
                                bottom: width-boxData.bottom_row*width,
                                left: boxData.left_col*width,
                            }}
                        />
                    ))
                    
                    : <div />
                }
            </div>
        </div>
    )
}

export default FaceImage;

// https://www.esafety.gov.au/sites/default/files/2019-08/Remove%20images%20and%20video.jpg