import React from 'react';
import './Header.css';
import CTA from '../CTA/CTA';
import profile from '../../assets/profile.png'
import HeaderSocial from '../HeaderSocial/HeaderSocial';

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Sadman Alam</h1>
                <h5 className='text-light'>Jr. Full Stack Developer</h5>
                <CTA></CTA>
                <HeaderSocial></HeaderSocial>
                <div className="me">
                    <img src={profile} alt="myself" />
                </div>
            </div>

        </header>
    );
};

export default Header;