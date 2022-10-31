import React from 'react';
import './Project.css';
import project1 from '../../assets/project1.png';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.png';

const Project = () => {
    return (
        <section id='project'>
            <h5>My Recent Work</h5>
            <h2>Project</h2>
            <div className="containet project__container">
                <article className='project__item'>
                    <div className='project__item-image'>
                        <img src={project1} alt="first" />
                    </div>
                    <h3>Car Parts Manufacturer</h3>
                    <p><small>(Fullstack project)</small></p>
                    <div className='project__item-cta'>
                        <a target='_blank' href="https://github.com/sadmanalam142/Car-Parts-Manufacturer-Client" className='btn'>Client Code</a>
                        <a target='_blank' href="https://github.com/sadmanalam142/Car-Parts-Manufacturer-Server" className='btn'>Server Code</a>
                        <a target='_blank' href="https://car-parts-manufacturer-28ac5.web.app/" className='btn btn-primary'>Website</a>
                    </div>
                </article>
                <article className='project__item'>
                    <div className='project__item-image'>
                        <img src={project2} alt="first" />
                    </div>
                    <h3>Doctors Portal</h3>
                    <p><small>(Fullstack project)</small></p>
                    <div className='project__item-cta'>
                        <a target='_blank' href="https://github.com/sadmanalam142/doctors-portal-client" className='btn'>Client Code</a>
                        <a target='_blank' href="https://github.com/sadmanalam142/dortors-portal-server" className='btn'>Server Code</a>
                        <a target='_blank' href="https://doctors-portal-42814.web.app/" className='btn btn-primary'>Website</a>
                    </div>
                </article>
                <article className='project__item'>
                    <div className='project__item-image'>
                        <img src={project3} alt="first" />
                    </div>
                    <h3>Pathagar</h3>
                    <p><small>(Fullstack project)</small></p>
                    <div className='project__item-cta'>
                    <a target='_blank' href="https://github.com/Rafsan12/pathagar" className='btn'>Client Code</a>
                        <a target='_blank' href="https://github.com/sadmanalam142/pathagar-server" className='btn'>Server Code</a>
                        <a target='_blank' href="https://pathagar-7e2af.firebaseapp.com/" className='btn btn-primary'>Website</a>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Project;