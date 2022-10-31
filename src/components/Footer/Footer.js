import React from 'react';
import './Footer.css';
import {FaFacebook} from 'react-icons/fa';
import {FaInstagramSquare} from 'react-icons/fa';
import {FaGithubSquare} from 'react-icons/fa';
import {BsLinkedin} from 'react-icons/bs';

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">Sadman Alam Portfolio</a>
            <ul className="parmalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer__socials">
                <a target="_blank" href="https://www.facebook.com/sadman.alam.142"><FaFacebook></FaFacebook></a>
                <a target="_blank" href="https://www.instagram.com/alam_sadman/?hl=en"><FaInstagramSquare></FaInstagramSquare></a>
                <a target="_blank" href="https://github.com/sadmanalam142"><FaGithubSquare></FaGithubSquare></a>
                <a target="_blank" href="https://www.linkedin.com/in/sadmanalam/"><BsLinkedin></BsLinkedin></a>
            </div>
            <div className="footer__copyright">
                <small>Copyright &copy; Sadman Alam. All right reserved.</small>
            </div>
        </footer>
    );
};

export default Footer;