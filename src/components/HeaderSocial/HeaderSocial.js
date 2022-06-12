import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsFacebook} from 'react-icons/bs';

const HeaderSocial = () => {
    return (
        <div className='header__social'>
            <a href="https://www.linkedin.com/in/sadman-alam-77b999231/" target='_blank'><BsLinkedin></BsLinkedin></a>
            <a href="https://github.com/sadmanalam142?tab=repositories" target='_blank'><BsGithub></BsGithub></a>
            <a href="https://www.facebook.com/sadman.alam.142/" target='_blank'><BsFacebook></BsFacebook></a>
        </div>
    );
};

export default HeaderSocial;