import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import './howtobid.css'
import howtobid from '../../assets/postingImages/howtoBid.png'
import fillUserInfo from '../../assets/postingImages/fillUserInfo.png'
import fillPaymentInfo from '../../assets/postingImages/fillPaymentInfo.png'
import fillDataInfo from '../../assets/postingImages/insertData.png'
import afterSuccess from '../../assets/postingImages/afterSuccessReview.png'
import { Link } from 'react-router-dom'
import ScrollToTop from '../../scrollTop/ScrollToTop'
import { Container } from '@material-ui/core'

function howToPost() {
    return (
        <div>
            <ScrollToTop/>
            <Header/>
            <Container>
            <div className='howToPostDiv'>
                <h2 style={{marginBottom:'30px'}}>How to Bid </h2>
                <div className='postDivs'>
                   <p className='howtopostParagraph1'>1. First, you should log into the system <span style={{color:'blue'}}><Link to='/register'>click here</Link> </span>if you dont have account</p>
                   <p className='howtopostParagraph'>2. Click on the Bid menu on the auction you want to participate</p>
                   <img alt="" src={howtobid} className='howToPostImages1'/>
                   <p className='howtopostParagraph'>3. Then, click submit bid button</p>
                   <p className='howtopostParagraph'>4. you can follow auction status on the my bid dashboard</p>
                </div>
            </div>
            </Container>
            <Footer/>
        </div>
    )
}

export default howToPost
