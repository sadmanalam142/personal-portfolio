import React, { useState } from 'react';
import './Navbar.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {BiMessageSquareDetail} from 'react-icons/bi';

const Navbar = () => {
    const [activeNav, setActiveNav] = useState('#');
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome></AiOutlineHome></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser></AiOutlineUser></a>
            <a href="#experience"><BiBook></BiBook></a>
            <a href="#project"><RiServiceLine></RiServiceLine></a>
            <a href="#contact"><BiMessageSquareDetail></BiMessageSquareDetail></a>
        </nav>
    );
};

export default Navbar;