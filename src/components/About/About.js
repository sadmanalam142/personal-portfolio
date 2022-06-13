import React from 'react';
import './About.css';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>
            <div className='container about__container'>
                <div className="about__cards">
                    <article className='about__card'>
                        <FaAward className='about__icon'></FaAward>
                        <h5>Experience</h5>
                        <small>1+ Years Working</small>
                    </article>
                    <article className='about__card'>
                        <FiUsers className='about__icon'></FiUsers>
                        <h5>Clients</h5>
                        <small>5+ Worldwide</small>
                    </article>
                    <article className='about__card'>
                        <VscFolderLibrary className='about__icon'></VscFolderLibrary>
                        <h5>Projects</h5>
                        <small>30+ Completed</small>
                    </article>
                </div>
                <p>I am a junior fullstack developer. I am pushing myself hard every single day to learn and explore new tools and technologies. I am sincere to my work. I always try to finish my work on time.</p>
                <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>
        </section>
    );
};

export default About;