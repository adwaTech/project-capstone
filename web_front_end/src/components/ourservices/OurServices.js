import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import './ourService.css'
import ScrollToTop from '../../scrollTop/ScrollToTop'
function OurServices() {
  

    return (
        <div>
            <ScrollToTop/>
            <Header/>
               <div className='ourServicesDiv'>
                    <div>
                        <p className='ourServicesTitle'>Our Services</p>
                    </div>
                    <div className='ourServiceGrids'>
                        <div className="serviceOF">
                            <p className='ourServiceGridTitles'>Post Auction</p>
                            <div className='ourServiceDescriptions'>
                                <p>A user who have an account can post an auction and check on the status of 
                                    his/her auction 
                                    </p>
                            </div>
                        </div>
                        <div className="serviceOF">
                            <p className='ourServiceGridTitles'>Participate on Auction</p>
                            <div className='ourServiceDescriptions'>
                                <p>you can partcipate on an auction if you want. But in order to participate on 
                                    an auction you should have to full fill the auction minimum requirements.
                                    
                                    </p>
                            </div>
                        </div>
                        <div className="serviceOF">
                            <p className='ourServiceGridTitles'>See Auctions</p>
                            <div className='ourServiceDescriptions'>
                                <p>you can see all the auctions posted by different users.

                                    </p>
                            </div>
                        </div>
                    </div>
                    <div className='ourServiceGrids'>
                        <div className="serviceOF">
                            <p className='ourServiceGridTitles'>Fasciltate platform</p>
                            <div className='ourServiceDescriptions'>
                                <p>We fascilitate the platform to let the auctioneer and bidder meet through this 
                                    website.
                                    </p>
                            </div>
                        </div>
                        <div className="serviceOF">
                            <p className='ourServiceGridTitles'>Fast Payment</p>
                            <div className='ourServiceDescriptions'>
                                 <p>we have provided online payment systems like CBE and Amole so the bidder or the 
                                     auctioneer can pay using his mobile phone.
                                    </p>
                            </div>
                        </div>
                        <div className="serviceOF">
                            <p className='ourServiceGridTitles'>For The Future</p>
                            <div className='ourServiceDescriptions'>
                                <p>we are trying to work with international payment methods like paypal and paytm.
                                    
                                    </p>
                            </div>
                        </div>
                    </div>

               </div>
            <Footer/>
        </div>
    )
}

export default OurServices
