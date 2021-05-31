import React from 'react';

import Topbar from '../Topbar/Topbar';
import Urlbar from '../Urlbar/Urlbar';

import './Home.scss';

const Home = () => {
    
    return (
        <div className="home-root">
            <div className="home-topbar">
                <Topbar />
            </div>
            <div className="home-image">
                image
            </div>
            <div className="home-urlbar">
                <Urlbar />
            </div>
        </div>
    )
}

export default Home;