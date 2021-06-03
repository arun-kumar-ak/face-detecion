import React from 'react';

// const app = new Clarifai.App({apiKey: 'c2bb31b7a78f4a89aea63495ad5d73ed'});

import Topbar from '../Topbar/Topbar';
import Urlbar from '../Urlbar/Urlbar';
import FaceImage from '../FaceImage/FaceImage';

import './Home.scss';

const Home = () => {
    return (
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
    )
}

export default Home;