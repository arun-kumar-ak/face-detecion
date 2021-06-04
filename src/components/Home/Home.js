import React from 'react';

import Topbar from '../Topbar/Topbar';
import Urlbar from '../Urlbar/Urlbar';
import FaceImage from '../FaceImage/FaceImage';

import './Home.scss';

const Home = () => {
    return (
        <div className="home-super-root">
            <div className="home-root">
                <div className="home-topbar">
                    <Topbar />
                </div>
                <div className="home-image">
                    <FaceImage />
                </div>
                <div className="home-urlbar">
                    <Urlbar />
                </div>
            </div>
        </div>
    )
}

export default Home;