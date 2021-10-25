import React from 'react'
import './payment.css'
import CbeMobile from '../../assets/paymentImages/cbeMobile.png'
import amole from '../../assets/paymentImages/amole.jpg'
import AmoleMobile from '../../assets/paymentImages/amoleMobile.png'
import HelloCash from '../../assets/paymentImages/hellocash.png'
import PayPal from '../../assets/paymentImages/paypal.png'
import Paytm from '../../assets/paymentImages/paytm.png'
import Telebirr from '../../assets/paymentImages/teleBirr.png'
import ScrollToTop from '../../scrollTop/ScrollToTop'
import Header from '../header/Header'
import Footer from '../footer/Footer'


function paymentOptions() {
    return (
        <div>
            <ScrollToTop/>
           <Header/>
           
           <div className='paymentDiv'>
               
                <h2 style={{opacity:'0.7',textAlign:'center'}}>Pay using one of the following</h2>
                <p style={{opacity:'0.7',textAlign:'center'}}>We are currently uisng two payment methods you can use them to pay.</p>
                <div className='paymentGrids'>
                   <div className='paymentWrapperDiv'>
                        <div className='cbeDiv'>
                                <img alt="" src={CbeMobile} className='PaymentImages'/>
                        </div>
                        <h3 style={{ opacity:'0.8',color: 'purple'}}>CBE BIRR</h3>
                        <div className='paymentMethodDescription'>
                            
                            <p> We are working with the commercial bank of ethiopia. so
                                you can finish your payment through CBE birr which is provided by the commercial bank of ethiopia 
                            </p>
                        </div>
                   </div>
                   <div className='paymentWrapperDiv'>
                        <div className='amoleDiv'>
                                <img alt="" src={amole} className='top_image_payment'/>
                                <img alt="" src={AmoleMobile} className='PaymentImages'/>
                        </div>
                        <h3 style={{ opacity:'0.8',color: 'blue'}}>AMOLE DASHEN</h3>
                        <div className='paymentMethodDescription'>
                            
                            <p> We are also working with Dashen Bank. so
                                you can finish your payment through Amole Dashen which is provided by Dashen Bank. 
                            </p>
                        </div>
                   </div>
                </div>
            
            <div className='futurePaymentDiv'>
                <div className='theFutureTitle'>
                    <h2 style={{marginBottom:'30px'}}>Upcoming Payment Methods </h2>
                    <p>We are making the road to work with differnet companies. Among those Companies we are already aggreed to work with HelloCash Lion and Awash </p>
                </div>
                <div className='futurePaymentGrids'>
                       <div className='futurePaymentGrids1'>
                            <div className='cbeDiv2'>
                                    <img alt="" src={HelloCash} className='PaymentImages'/>
                            </div>
                            <div className='cbeDiv1'>
                                    <img alt="" src={PayPal} className='PaymentImages'/>
                            </div>
                        </div>
                        <div className='futurePaymentGrids1'>
                            <div className='cbeDiv2'>
                                    <img alt="" src={Telebirr} className='PaymentImages'/>
                            </div>
                            <div className='cbeDiv1'>
                                    <img alt="" src={Paytm} className='PaymentImages'/>
                            </div>
                        </div>
                </div>
            </div>
            </div>
            <Footer/>
        </div>
    )
}       

export default paymentOptions
