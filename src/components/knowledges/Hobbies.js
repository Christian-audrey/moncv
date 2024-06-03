import React from 'react';

const Hobbies = () => {
    return (
        <div className='hobbies'>
            <h3>Intérèts</h3>
            <ul>
                <li className='hobby'>
                    <i className='fas fa-running'></i>
                    <span>Course à pied</span>
                </li>
                <li className='hobby'>
                    <i className='fas fa-hiking'></i>
                    <span>Randonnées</span>
                    
                </li>
                <li className='hobby'>
                    <i className='fas fa-seeding'></i>
                    <span>permaculture</span>
                </li>
                <li className='hobby'>
                    <i className='fas fa-bitcoin'></i>
                    <span>crypto-monnaies</span>
                </li>
            </ul>
            
        </div>
    );
};

export default Hobbies;