
import React,{useEffect} from 'react'
import './about.css'
import Backgorundd from '../../assets/images/shape.png'
import kira from '../../assets/images/kira.jpg'
import mesi from '../../assets/images/mesi.jpg'
import miki from '../../assets/images/miki.jpg'
import mengie from '../../assets/images/mengie.jpg'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {strings} from '../../language/language';
import {useSelector} from 'react-redux'
import ScrollToTop from '../../scrollTop/ScrollToTop'

export default function About() {
    const lang=useSelector((state)=>state.LanguageReducer.language)
    
    React.useEffect(()=>{
        
    },[lang]);
    useEffect(()=>{
        Aos.init({duration:2000})
    })
    return (

        <div>
            <ScrollToTop/>
            <Header/>
                <div className="spaceProvider">

                </div>
            <div style={{color: 'rgb(30,51,34,0.9)'}}>
                <div className="aboutus">
                    <div className="backgroundDiv">
                        <img alt="" src={Backgorundd} height="300px" width='300px'/>
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
                                        <img style={{borderRadius:'50px'}} alt="" className="image" src={kira}/>
                                        <p className="nameof">Kirubel Adamu</p>
                                        <p className="expertize">BackEnd Developer</p>
                                    </div> 
                                    <div data-aos='fade-down' className="gridItems">
                                        <img style={{borderRadius:'50px'}} alt="" className="image" src={mesi}/>
                                        <p className="nameof">Meseret Kifie</p>
                                        <p className="expertize">FrontEnd Developer</p>
                                    </div> 
                                </div>
                                <div className='twogrids'>
                                    <div data-aos='fade-up' className="gridItems">
                                        <img style={{borderRadius:'50px'}} alt="" className="image" src={miki}/>
                                        <p className="nameof">Michael Mamaye</p>
                                        <p className="expertize">UI Designer</p>
                                    </div> 
                                    <div data-aos='fade-down' className="gridItems">
                                        <img style={{borderRadius:'50px'}} alt="" className="image" src={mengie}/>
                                        <p className="nameof">Mengistu Birhie</p>
                                        <p className="expertize">Translation Leader</p>
                                    </div> 
                                </div>
                            </div>  
                        </div>
                    <div className='ourteamDiv'>
                        <div className="visionDiv">
                            <div>
                                <p className="vision_mission vision">{strings.visiontitle}</p>
                                <div data-aos='zoom-in-left' className="visionParagraph">
                                     {strings.aboutusparagrap1}
                                </div>
                            </div>
                            <div>
                                <p className="vision vision_mission">{strings.missiontitle}</p>
                                <div data-aos='zoom-in-right' className="visionParagraph">
                                    {strings.aboutusparagrap2}
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