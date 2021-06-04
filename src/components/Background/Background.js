import React from 'react';

import  './Background.scss';

const Background = () => {
    return (
        <div style={{width: '100%',zIndex: '-1', position: 'absolute', top: 0}}>
            <svg style={{height: '100vh'}}>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="2"/>
                    <feComposite in2="SourceGraphic"
                                operator="out" result="glow" />
                    <feFlood floodColor="white" floodOpacity="0.2" />
                    <feComposite in2="SourceGraphic"
                                operator="atop" result="light" />
                    <feComposite in="glow" in2="light" />    
                </filter>
                <pattern id="p" patternUnits="userSpaceOnUse"
                        width="180px" height="120px"
                        patternTransform="scale(1,0.8660254)">
                    <g filter="url(#glow)">
                    <g className="wrapper">
                        <path id="hex" pathLength="388.5"
                                d="M-30,-60 30,-60 60,0
                                        30,60 -30,60 -60,0Z"
                                transform="scale(0.935)" />
                    </g>
                    <use xlinkHref="#hex" x="0" y="+120" />
                    <use xlinkHref="#hex" x="+90" y="+60" />
                    <use xlinkHref="#hex" x="+180" y="0" />
                    <use xlinkHref="#hex" x="+180" y="120" />
                    </g>
                </pattern>
                <rect fill="url(#p)" width="100%" height="100%"/>
            </svg>
        </div>
    )
}

export default Background;