import { CardMedia, Container, Typography,Grid,Card,CardContent } from '@material-ui/core'
import React,{useEffect} from 'react'
import './about.css'
import Backgorundd from '../../assets/images/shape.png'
import Theman from '../../assets/images/jacket.jpg'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {strings} from '../../language/language';
import {useSelector} from 'react-redux'

export default function About() {
    const lang=useSelector((state)=>state.LanguageReducer.language)
    React.useEffect(()=>{},[lang]);
    
    useEffect(()=>{
        Aos.init({duration:2000})
    })
    return (

        <div>
            <Header/>
                <div className="spaceProvider">

                </div>
            <div style={{color: 'rgb(30,51,34,0.9)'}}>
                <div className="aboutus">
                    <div className="backgroundDiv">
                        <img src={Backgorundd} height="300px" width='300px'/>
                    </div>
                    <div data-aos='flip-left' className="contentDiv">
                        <p className="headers">{strings.About}</p>
                        <p className="paragraphs">
                            {strings.about}</p>
                    </div>
                </div>
                <div className="whole">
                   
                        <div className="teamDiv ">
                            <p className="headers team">{strings.ourteam}</p>
                            <div className="grids">
                                <div className='twogrids'>
                                    <div data-aos='fade-up' className="gridItems">
                                        <img className="image" src={Theman}/>
                                        <p className="nameof">Meseret Kifle</p>
                                        <p className="expertize">{strings.SoftwareEngineer} (AASTU)</p>
                                    </div> 
                                    <div data-aos='fade-down' className="gridItems">
                                        <img className="image" src={Theman}/>
                                        <p className="nameof">Michael Mamaye</p>
                                        <p className="expertize">Software Engineer (AASTU)</p>
                                    </div> 
                                </div>
                                <div className='twogrids'>
                                    <div data-aos='fade-up' className="gridItems">
                                        <img className="image" src={Theman}/>
                                        <p className="nameof">Mengistu Birhie</p>
                                        <p className="expertize">Software Engineer (AASTU)</p>
                                    </div> 
                                    <div data-aos='fade-down' className="gridItems">
                                        <img className="image" src={Theman}/>
                                        <p className="nameof">Kirubel Adamu</p>
                                        <p className="expertize">Software Engineer (AASTU)</p>
                                    </div> 
                                </div>
                            </div>  
                        </div>
                    <div className='ourteamDiv'>
                        <div className="visionDiv">
                            <div>
                                <p className="vision_mission vision">Vision</p>
                                <div data-aos='zoom-in-left' className="visionParagraph">
                                        We consistently work on our development process to provide an
                                        informative, user-friendly and effective strategy to provide companies 
                                        with the message or goal they are hoping to accomplish.<br/> This development 
                                        process is tailored to meet the needs of small, medium and large size businesses 
                                        and enterprises.
                                </div>
                            </div>
                            <div>
                                <p className="vision vision_mission">Mission</p>
                                <div data-aos='zoom-in-right' className="visionParagraph">
                                    "To empower our clients to use the web 
                                    to its full potential by providing affordable, 
                                    effective, custom solutions."
                                </div>
                            </div>
                        </div>
                    </div>
        
                </div>
            </div>
            <Footer/>
        </div>

    )
}