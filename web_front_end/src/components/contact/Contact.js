<<<<<<< HEAD
import React from 'react';
import './contact.css';
import LocationImage from '../../assets/images/location.png';
import EmailImage from '../../assets/images/email.png';
import PhoneImage from '../../assets/images/phone.png';
import FaceBookIcon from '@material-ui/icons/Facebook';
import { Twitter } from '@material-ui/icons';
import { Instagram } from '@material-ui/icons';
import { LinkedIn } from '@material-ui/icons';
import Header from '../header/Header';
import Footer from '../footer/Footer'

export default function Contact() {
    return (
    <div>
        <Header/>
        <div className="contact">
        <div class="container">
            <span class="big-circle"></span>
            <img src="img/shape.png" class="square" alt="" />
            <div class="form">
                <div class="contact-info">
                <h3 class="title">Let's get in touch</h3>
                <p class="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                    dolorum adipisci recusandae praesentium dicta!
                </p>

                <div class="info">
                    <div class="information">
                    <img src={LocationImage} class="icon" alt="" />
                    <p>92 Cherry Drive Uniondale, NY 11553</p>
                    </div>
                    <div class="information">
                    <img src={EmailImage} class="icon" alt="" />
                    <p>lorem@ipsum.com</p>
                    </div>
                    <div class="information">
                    <img src={PhoneImage} class="icon" alt="" />
                    <p>123-456-789</p>
                    </div>
                </div>

                <div class="social-media">
                    <p>Connect with us :</p>
                    <div class="social-icons">
                    <a href="#">
                        <i class="fab fa-facebook-f">
                            <FaceBookIcon/>
                        </i>
                    </a>
                    <a href="#">
                        <i class="fab fa-twitter">
                            <Twitter/>
                        </i>
                    </a>
                    <a href="#">
                        <i class="fab fa-instagram">
                            <Instagram/>
                        </i>
                    </a>
                    <a href="#">
                        <i class="fab fa-linkedin-in">
                            <LinkedIn/>
                        </i>
                    </a>
                    </div>
                </div>
                </div>

                <div class="contact-form">
                <span class="circle one"></span>
                <span class="circle two"></span>

                <form action="index.html" autocomplete="off">
                    <h3 class="title">Contact us</h3>
                    <div class="input-container">
                    <input type="text" name="name" class="input" />
                    <label for="">Username</label>
                    <span>Username</span>
                    </div>
                    <div class="input-container">
                    <input type="email" name="email" class="input" />
                    <label for="">Email</label>
                    <span>Email</span>
                    </div>
                    <div class="input-container">
                    <input type="tel" name="phone" class="input" />
                    <label for="">Phone</label>
                    <span>Phone</span>
                    </div>
                    <div class="input-container textarea">
                    <textarea name="message" class="input"></textarea>
                    <label for="">Message</label>
                    <span>Message</span>
                    </div>
                    <input type="submit" value="Send" class="btn" />
                </form>
                </div>
            </div>
            </div>
                
            </div>
        <Footer/>
=======
import React from 'react'

export default function Contact() {
    return (
    <div className="container">
        <span className="big-circle"></span>
        <img src="img/shape.png" className="square" alt="" />
        <div className="form">
            <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                dolorum adipisci recusandae praesentium dicta!
            </p>

            <div className="info">
                <div className="information">
                    <img src="img/location.png" className="icon" alt="" />
                    <p>92 Cherry Drive Uniondale, NY 11553</p>
                </div>
                <div className="information">
                <img src="img/email.png" className="icon" alt="" />
                <p>lorem@ipsum.com</p>
                </div>
                <div className="information">
                <img src="img/phone.png" className="icon" alt="" />
                <p>123-456-789</p>
                </div>
            </div>

            <div className="social-media">
                <p>Connect with us :</p>
                <div className="social-icons">
                <a href="#">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                </a>
                </div>
            </div>
            </div>

            <div className="contact-form">
            <span className="circle one"></span>
            <span className="circle two"></span>

            <form action="index.html" autocomplete="off">
                <h3 className="title">Contact us</h3>
                <div className="input-container">
                <input type="text" name="name" className="input" />
                <label for="">Username</label>
                <span>Username</span>
                </div>
                <div className="input-container">
                <input type="email" name="email" className="input" />
                <label for="">Email</label>
                <span>Email</span>
                </div>
                <div className="input-container">
                <input type="tel" name="phone" className="input" />
                <label for="">Phone</label>
                <span>Phone</span>
                </div>
                <div className="input-container textarea">
                <textarea name="message" className="input"></textarea>
                <label for="">Message</label>
                <span>Message</span>
                </div>
                <input type="submit" value="Send" className="btn" />
            </form>
            </div>
        </div>
>>>>>>> main
    </div>
    )
}
