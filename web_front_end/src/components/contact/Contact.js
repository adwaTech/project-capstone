import React, { useState } from 'react';
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
import { strings } from '../../language/language';
import { useSelector, useDispatch } from 'react-redux'
import ScrollToTop from '../../scrollTop/ScrollToTop';
import CircularProgress from '@material-ui/core/CircularProgress'
import {
    FeedbackAction,
    FeedbackCleanUpAction
} from '../../redux-state-managment/Actions';
import Alert from '@material-ui/lab/Alert';

export default function Contact() {
    const dispatch = useDispatch();
    const lang = useSelector((state) => state.LanguageReducer.language)
    const feedback_error = useSelector((state) => state.SendFeedBackReducer.feedbacks_error);
    const feedback_status = useSelector((state) => state.SendFeedBackReducer.feedbacks_status);
    const user = useSelector((state) => state.AccountReducer.user);
    const token = useSelector((state) => state.AccountReducer.token);
    React.useEffect(() => {

    }, [lang]);
    const [values, setValues] = useState({
        email: token?user.email:'',
        feedback: '',
        userId: token ? user._id : null,
    })
    const [err, setErr] = useState({ })
    const handleChange = e => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })
    }
    const handleClick = e => {
        e.preventDefault();
        let errors = { }
        if (values.email==='') {
            errors.email = "email is empty"
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "email is invalid"
        }
        if (values.feedback==='') {
            errors.message = "message is empty"
        }

        setErr(errors);
        if (values.email && values.feedback) {
            dispatch(FeedbackAction(values, token));
            setTimeout( async ()=> {
                await dispatch(FeedbackCleanUpAction());
                setValues({
                    email: token?user.email:'',
                    feedback: '',
                    userId: token ? user._id : null,
                });
            }, 3000);
        }
        
        
    }


    const [progress, setProgress] = React.useState(false);
    React.useEffect(() => {
        if (feedback_error) {
            setProgress(false);
        }
        if (feedback_status) {
            setProgress(false);
        }
    }, [feedback_error, feedback_status]);
    React.useEffect(() => {
        if (token) {
            setValues({ ...values, userId: user._id,email:user.email })
        }

    }, [token])
    return (
        <div>
            <Header />
            <ScrollToTop />
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
                                    <p>www.m3kauction.com</p>
                                </div>
                                <div class="information">
                                    <img src={EmailImage} class="icon" alt="" />
                                    <p>meseretkifle2@gmail.com</p>
                                </div>
                                <div class="information">
                                    <img src={PhoneImage} class="icon" alt="" />
                                    <p>+251917897592</p>
                                </div>
                            </div>

                            <div class="social-media">
                                <p>{strings.connectwithus} :</p>
                                <div class="social-icons">
                                    <a href="http://localhost:3000/">
                                        <i class="fab fa-facebook-f">
                                            <FaceBookIcon />
                                        </i>
                                    </a>
                                    <a href="http://localhost:3000/">
                                        <i class="fab fa-twitter">
                                            <Twitter />
                                        </i>
                                    </a>
                                    <a href="http://localhost:3000/">
                                        <i class="fab fa-instagram">
                                            <Instagram />
                                        </i>
                                    </a>
                                    <a href="http://localhost:3000/">
                                        <i class="fab fa-linkedin-in">
                                            <LinkedIn />
                                        </i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="contact-form">
                            <span class="circle one"></span>
                            <span class="circle two"></span>

                            <form action="index.html" autocomplete="off">
                                
                                <h3 class="title">Feed Back</h3>
                                {
                                    feedback_error
                                        ? <Alert severity="error">{feedback_error}</Alert>
                                        : null
                                }
                                {
                                    feedback_status === 200
                                        ? <Alert severity="success">feedback is successfuly submited thank you for your feedback</Alert>
                                        : null
                                }
                                <div class="input-container">
                                    <input type="email" value={values.email} name="email" placeholder="email" onChange={(e) => { handleChange(e) }} class="input" />

                                    {err.email && <p className='contactErrorMessages'>{err.email}</p>}
                                </div>

                                <div class="input-container textarea">
                                    <textarea name="feedback" value={values.feedback} placeholder="message" onChange={(e) => { handleChange(e) }} class="input"></textarea>

                                    {err.message && <p className='contactErrorMessages'>{err.message}</p>}
                                </div>
                                <button type="submit" onClick={(e) => { handleClick(e) }} value={strings.send} class="btn" >
                                    {progress ? <span><CircularProgress color="#ffffff" /> Loading</span> : "submit"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />



        </div>
    )
}
