import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className='home'>
            <Navigation/>
            <div className='homeContent'>
                <div className='content'>
                    <h1>Fouman Audrey Christian</h1>
                    <h2>Developpeur Front-end</h2>
                    <div className='pdf'>
                        <a href='#' target='blank'>Télécharger CV</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;