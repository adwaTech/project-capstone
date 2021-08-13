import React,{useState} from 'react';
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
import {strings} from '../../language/language';
import {useSelector} from 'react-redux'
import { string } from 'prop-types'

export default function Contact() {
    const lang=useSelector((state)=>state.LanguageReducer.language)
    
    const [values,setValues]=useState({
        username:'',
        email:'',
        phone:'',
        message:'',
    })
    const [err, setErr]=useState({})
    const handleChange=e=>{
        const {name,value}=e.target;
        setValues({...values,[name]:value})
    }
    const handleClick= e =>{
          e.preventDefault();
          let errors={}
          if(!values.username.trim())
          {
              errors.username="username is empty"
          }
          if(!values.email.trim())
          {
              errors.email="email is empty"
          }
          else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
          {
              errors.email="email is invalid"
          }
          if(!values.phone.trim())
          {
              errors.phone="phone is empty"
          }
          if(!values.message.trim())
          {
              errors.message="message is empty"
          }

          setErr(errors);
    }


    return (
    <div>
        <Header/>
        <div className="contact">
        <div class="container">
            <span class="big-circle"></span>
            <img src="img/shape.png" class="square" alt="" />
            <div class="form">
                <div class="contact-info">
                <h3 class="title">{strings.getintouch}</h3>
                <p class="text">{strings.contactmoto} </p>

                <div class="info">
                    <div class="information">
                    <img src={LocationImage} class="icon" alt="" />
                    <p>{strings.golagul}</p>
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
                        <input type="text" value={values.username} placeholder='username' onChange={(e)=>{handleChange(e)}}name="username" class="input" />
                        {/* <label htmlFor="usernameinput">Username</label> */}
                        {/* <span>Username</span> */}
                        {err.username && <p className='contactErrorMessages'>{err.username}</p>}
                    </div>
                    <div class="input-container">
                        <input type="email" value={values.email}  name="email"  placeholder='email'onChange={(e)=>{handleChange(e)}} class="input" />
                        {/* <label for="input">Email</label>
                        <span>Email</span> */}
                        {err.email && <p className='contactErrorMessages'>{err.email}</p>}
                    </div>
                    <div class="input-container">
                        <input type="tel" name="phone" value={values.phone}  placeholder='phone' onChange={(e)=>{handleChange(e)}} class="input" />
                        {/* <label for="">Phone</label>
                        <span>Phone</span> */}
                        {err.phone && <p className='contactErrorMessages'>{err.phone}</p>}

                    </div>
                    <div class="input-container textarea">
                        <textarea name="message" value={values.message}  placeholder='message' onChange={(e)=>{handleChange(e)}} class="input"></textarea>
                        {/* <label for="">Message</label>
                        <span>Message</span> */}
                        {err.message && <p className='contactErrorMessages'>{err.message}</p>}
                    </div>
                    <input type="submit" onClick={(e)=>{handleClick(e)}} value="Send" class="btn" />
                </form>
                </div>
            </div>
            </div>
                
            </div>
        <Footer/>
    </div>
    )
}
