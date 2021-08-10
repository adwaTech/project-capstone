import { CardMedia, Container, Typography,Grid,Card,CardContent } from '@material-ui/core'
import React,{useEffect} from 'react'
import './about.css'
import Backgorundd from '../../assets/images/shape.png'
import Theman from '../../assets/images/jacket.jpg'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function About() {

    useEffect(()=>{
        Aos.init({duration:2000})
    })
    return (

        <div>
            <Header/>
                <div className="spaceProvider">

                </div>
                <div className="aboutus">
                    <div className="backgroundDiv">
                        <img src={Backgorundd} height="300px" width='300px'/>
                    </div>
                    <div data-aos='flip-left' className="contentDiv">
                        <p className="headers">About Us</p>
                        <p className="paragraphs">
                            M3K auction are selling surplus movable property (SMP) via a Web Based Electronic Auction. 
                            Each auction will be activated for a period of time clearly stating the start and end date. 
                            This information is available on the information panel of the web application. Usually it will be active from Monday to Friday lasting two weeks. 
                            During this period you can actively take part and submit your bid for the surplus property.</p>
                    </div>
                </div>
                <div className="whole">
                    <div className="teamDiv">
                        <p className="headers team">Team</p>
                         <div className="grids">
                            <div className='twogrids'>
                                <div data-aos='fade-up' className="gridItems">
                                    <img className="image" src={Theman}/>
                                    <p className="nameof">Meseret Kifle</p>
                                    <p className="expertize">Software Engineer (AASTU)</p>
                                </div> 
                                <div data-aos='fade-up' className="gridItems">
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
                                <div data-aos='fade-up' className="gridItems">
                                    <img className="image" src={Theman}/>
                                    <p className="nameof">Kirubel Adamu</p>
                                    <p className="expertize">Software Engineer (AASTU)</p>
                                </div> 
                            </div>
                         </div>  
                    </div>
                    <div className="visionDiv">
                        <p className="headers vision">Vision</p>
                        <ul data-aos='zoom-in-left' className="lists">
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta suscipit voluptates officia,
                           </li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta suscipit voluptates officia,
                           </li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta suscipit voluptates officia,
                           </li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta suscipit voluptates officia,
                           </li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta suscipit voluptates officia,
                           </li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta suscipit voluptates officia,
                           </li>
                        </ul>
                    </div>
                </div>
            <Footer/>
        </div>

    )
}