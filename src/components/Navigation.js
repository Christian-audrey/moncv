import React from 'react';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
    return (
        <div className='sidebar'>
            <div className='id'>
                <div className='idcontent'>
                   
                    <img src='./media/christian.jpg' alt='profil-pic'/>
                    <h3>Fouman Audrey Christian</h3>

                </div>

            </div>

            <div className='navigation'>
                <ul>
                    <li>
                     <NavLink exact to="/" activeClassName="navActive" >
                        <i className='fas fa-home'></i>
                        <span>Acceuil</span>

                     </NavLink>
                    </li>
                    <li>
                     <NavLink exact to="/competences" activeClassName="navActive" >
                        <i className='fas fa-mountain'></i>
                        <span>Competences</span>

                     </NavLink>
                    </li>
                    <li>
                     <NavLink exact to="/portfolio" activeClassName="navActive" >
                        <i className='fas fa-images'></i>
                        <span>Portfolio</span>

                     </NavLink>
                    </li>
                    <li>
                     <NavLink exact to="/contact" activeClassName="navActive" >
                        <i className='fas fa-address-book'></i>
                        <span>Contact</span>

                     </NavLink>
                    </li>
                </ul>

            </div>

        <div className='socialnetwork'>
           <ul>
                <li>
                 <a href='https://www.google.com' target='blank' 
                 rel='noopener noreferrer'><i className='fab fa-linkedin'></i></a>
                </li>

                <li>
                 <a href='https://www.google.com' target='blank' 
                 rel='noopener noreferrer'><i className='fab fa-github'></i></a>
                </li>

                <li>
                 <a href='https://www.google.com' target='blank' 
                 rel='noopener noreferrer'><i className='fab fa-twitter'></i></a>
                </li>

                <li>
                 <a href='https://www.google.com' target='blank' 
                 rel='noopener noreferrer'><i className='fab fa-facebook'></i></a>
                </li>
           </ul>
            <div className='signature'>
                <p>Throne Art 2024</p>
            </div>
        </div>
        </div>
    );
};

export default Navigation;