import Loader from 'react-loaders';
import React, { useRef, useState } from 'react';
import './index.scss';
import emailjs from '@emailjs/browser';
import AnimatedLetters from '../AnimatedLetters';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';


const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm  = useRef();

    setTimeout(() => {
        setLetterClass('text-animate-hover')
    },3000);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
        .sendForm(
            'gmail',
            'contact_form',
            refForm.current,
            'Ib63IQXVcBxZe2pRX'
        )
        .then(
            () => {
                alert('Message sent!');
                window.location.reload(false);
            },
            () => {
                alert('Message failed to send, please try again.');
            }
        )
    }
      
    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters 
                           letterClass={letterClass}
                           strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                           idx={15}/>  
                    </h1>
                    <p>
                        I am currently looking for a new opportunity, my inbox is always open. 
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                    
                    <div className="contact-form">

                        <form ref={refForm} onSubmit={sendEmail}>

                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder="Name" required/>
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder="Email" required/>
                                </li>
                                
                                <li>
                                    <input placeholder="Subject" type='text' name='subject' required/>
                                </li>
                                <li>
                                    <textarea type='text' name="message" placeholder="Message" required></textarea>
                                </li>
                                <li className='submit'>
                                    <input type="submit" className='flat-button' value='SEND'/>
                                </li>
                            </ul>
                        </form>    
                    </div>
                </div>
                <div className="info-map">
                    Anish, Chikhaliya,
                    <br/>
                    Amroli, <br/>
                    Surat, Gujrat, India - 394107 <br/>
                    <span>anishchikhaliya02@gmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[21.249776758466222, 72.84893256581424]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[21.249776758466222, 72.84893256581424]}>
                            <Popup> Anish lives here, come over for contact :) </Popup>
                        </Marker>
                    </MapContainer>
                </div>   
            </div>
            <Loader type="pacman"  />
        </>
    );

}
export default Contact;