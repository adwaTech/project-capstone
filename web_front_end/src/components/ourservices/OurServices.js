import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import {Grid, Typography} from '@material-ui/core'
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
                        <div>
                            <p className='ourServiceGridTitles'>Post Auction</p>
                            <div className='ourServiceDescriptions'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                    Dolorem sequi totam vel quaerat in vitae culpa, sint quibusdam, 
                                    sed incidunt voluptates maiores aliquid doloremque reiciendis
                                    cumque minus nihil magni eaque!
                                    </p>
                            </div>
                        </div>
                        <div>
                            <p className='ourServiceGridTitles'>participate on Auction</p>
                            <div className='ourServiceDescriptions'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                    Dolorem sequi totam vel quaerat in vitae culpa, sint quibusdam, 
                                    sed incidunt voluptates maiores aliquid doloremque reiciendis
                                    cumque minus nihil magni eaque!
                                    </p>
                            </div>
                        </div>
                        <div>
                            <p className='ourServiceGridTitles'>Post Auction</p>
                            <div className='ourServiceDescriptions'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                    Dolorem sequi totam vel quaerat in vitae culpa, sint quibusdam, 
                                    sed incidunt voluptates maiores aliquid doloremque reiciendis
                                    cumque minus nihil magni eaque!
                                    </p>
                            </div>
                        </div>
                    </div>
                    <div className='ourServiceGrids'>
                        <div>
                            <p className='ourServiceGridTitles'>Post Auction</p>
                            <div className='ourServiceDescriptions'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                    Dolorem sequi totam vel quaerat in vitae culpa, sint quibusdam, 
                                    sed incidunt voluptates maiores aliquid doloremque reiciendis
                                    cumque minus nihil magni eaque!
                                    </p>
                            </div>
                        </div>
                        <div>
                            <p className='ourServiceGridTitles'>participate on Auction</p>
                            <div className='ourServiceDescriptions'>
                                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                    Dolorem sequi totam vel quaerat in vitae culpa, sint quibusdam, 
                                    sed incidunt voluptates maiores aliquid doloremque reiciendis
                                    cumque minus nihil magni eaque!
                                    </p>
                            </div>
                        </div>
                        <div>
                            <p className='ourServiceGridTitles'>Post Auction</p>
                            <div className='ourServiceDescriptions'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                    Dolorem sequi totam vel quaerat in vitae culpa, sint quibusdam, 
                                    sed incidunt voluptates maiores aliquid doloremque reiciendis
                                    cumque minus nihil magni eaque!
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
