import React, { useRef } from 'react';
import './Contact.css';
import {HiOutlineMail} from 'react-icons/hi';
import {RiMessengerLine} from 'react-icons/ri';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_06c6s9a', 'template_s28ujgj', form.current, 'lcx5RQdskuy-Qiput')

    e.target.reset();
  };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className='contact__option'>
                        <HiOutlineMail className='contact__option-icon'></HiOutlineMail>
                        <h4>Email</h4>
                        <h5>sadmanalam142@gmail.com</h5>
                        <a target="_blank" href="mailto:sadmanalam142@gmail.com">Send a Message</a>
                    </article>
                    <article className='contact__option'>
                        <RiMessengerLine className='contact__option-icon'></RiMessengerLine>
                        <h4>Messenger</h4>
                        <h5>sadman alam</h5>
                        <a target="_blank" href="https://m.me/sadman.alam.142">Send a Message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea rows="7" name='message' placeholder='Your Message' required></textarea>
                    <input type="submit" value="Send" className='btn btn-primary' />
                </form>
            </div>
        </section>
    );
};

export default Contact;