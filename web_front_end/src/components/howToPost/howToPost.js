import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import './howtopost.css'
import userDashboard from '../../assets/postingImages/userDashboard.png'
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
                <h2 style={{marginBottom:'30px'}}>How to Post </h2>
                <div className='postDivs'>
                   <p className='howtopostParagraph1'>1. First, you should log into the system <span style={{color:'blue'}}><Link to='/register'>click here</Link> </span>if you dont have account</p>
                   <p className='howtopostParagraph'>2. Click on the post menu on the user Dashboard</p>
                   <img alt="" src={userDashboard} className='howToPostImages1'/>
                   <p className='howtopostParagraph'>3. Then, Fill the field in apropriate way so you can get more customers</p>
                   <img alt="" src={fillUserInfo} className='howToPostImages'/>
                   <p className='howtopostParagraph'>4. Then, tell your customer about the payment and condition of the material. if you select seald then the highest bid will not be seen by other bidders.</p>
                   <img alt="" src={fillPaymentInfo} className='howToPostImages'/>
                   <p className='howtopostParagraph'>5. More on payment, fill the intial value of the auction. CPO is the money that the bidder has to pay in order to participate on your auction. 
                       and also tell your customers what type of auction is your auction select from the option provided. </p>
                   <img alt="" src={fillDataInfo} className='howToPostImages'/>
                   <p className='howtopostParagraph'>6. Finally, if you successfully passed the above you can see your auction on the list of recent posts</p>
                   <img alt="" src={afterSuccess} className='howToPostImages'/>
                   
                </div>
            </div>
            </Container>
            <Footer/>
        </div>
    )
}

export default howToPost
