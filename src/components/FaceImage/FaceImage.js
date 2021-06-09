import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IMG_WIDTH, IMG_URL } from '../../redux/constants';

import './FaceImage.scss';

import emptyImg from '../../assets/empty.jpg';

const mapStateToProps = (state) => {
    return {
        urlData : state.urlData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        imgWidthLoader: (img) => dispatch({type: IMG_WIDTH, payload: img.offsetWidth}),
        errorEmptyImg: () => dispatch({type: IMG_URL, payload: emptyImg})
    }
}

class FaceImage extends Component {
    onimgload = ({target: img}) => {
        this.props.imgWidthLoader(img)
    }

    render() {
        const { urlData, errorEmptyImg } = this.props;
        const width = urlData.imgWidth
        return (
            <div className="face-img-root">
                <div style={{position: 'relative'}} >
                    <img
                        src={urlData.url ? urlData.url : emptyImg}
                        className="face-img"
                        alt="face detect img"
                        onLoad={this.onimgload}
                        onError={() => {
                            errorEmptyImg()
                        }}
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
}

export default connect(mapStateToProps,mapDispatchToProps)(FaceImage);