import React, { useState } from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import './faq.css'
import {ArrowDropUp,ArrowDropDown} from '@material-ui/icons'
import { Link } from 'react-router-dom'
import ScrollToTop from '../../scrollTop/ScrollToTop'
function Faq() {

    const [open,setOpen]=useState(false)
    const [open2,setOpen2]=useState(false)
    const [open3,setOpen3]=useState(false)
    const [open4,setOpen4]=useState(false)
    const handleClick=(e)=>{
          if(e=='1'){
            setOpen(!open)
          }
          if(e=='2'){
            setOpen2(!open2)
          }
          if(e=='3'){
            setOpen3(!open3)
          }
          if(e=='4'){
            setOpen4(!open4)
          }
            
    }
    
    return (
        
        <div>
            <ScrollToTop/>
            <Header/>
            <div className='faqDiv'>
                <p className='faqTitle'>Frequently Asked Questions (FAQ)</p>
                <div className='wholeFaqQuestion'>
                    <div className='faqQuestionDiv'>
                        <div onClick={()=>{handleClick('1')}} className='thisQuestion'>
                            <p className='faqQuestions'>Q1. How Can I Post? </p>
                            <span>{open && <ArrowDropUp/>}{!open && <ArrowDropDown/>}</span>
                        </div>
                        {open && <div className='answersDiv'>
                            <p className='faqAnswers'>First, you have to register in order to post. <span style={{textDecoration:'underline',color:'blue'}}><Link to='/register'>click here to register</Link></span></p>
                            <p className='faqAnswers'>Then, follow the steps provided in how to post. <span style={{textDecoration:'underline',color:'blue'}}><Link to='/how-to-post'>click here to read how to post</Link></span></p>
                        </div>}
                    </div>
                    <div className='faqQuestionDiv'>
                        <div onClick={()=>{handleClick('2')}} className='thisQuestion'>
                            <p className='faqQuestions'>Q2. How Can I participate on auctions? </p>
                            <span>{open2 && <ArrowDropUp/>}{!open2 && <ArrowDropDown/>}</span>
                        </div>
                        {open2 && <div className='answersDiv'>
                            <p className='faqAnswers'>First, you have to register in order to participate. <span style={{textDecoration:'underline',color:'blue'}}><Link to='/register'>click here to register</Link></span></p>
                            <p className='faqAnswers'>then, click on the basket on button on the item you wanted to participate </p>
                            <p className='faqAnswers'>or, you can see how to bid on items list <span style={{textDecoration:'underline',color:'blue'}}><Link to='/how-to-post'>click here to read how to post</Link></span></p>
                        </div>}
                    </div>
                    <div className='faqQuestionDiv'>
                        <div onClick={()=>{handleClick('3')}} className='thisQuestion'>
                            <p className='faqQuestions'>Q3. How Can I register? </p>
                            <span>{open3 && <ArrowDropUp/>}{!open3 && <ArrowDropDown/>}</span>
                        </div>
                        {open3 && <div className='answersDiv'>
                            <p className='faqAnswers'>1. click on sign up or register button or <span style={{textDecoration:'underline',color:'blue'}}><Link to='/register'>click here to register</Link></span></p>
                            <p className='faqAnswers'>2. fill all the fields correctly </p>
                            <p className='faqAnswers'>3. then click next and you will get another field and fill it again</p>
                            <p className='faqAnswers'>3. then click next and you will get another field and fill it again</p>
                        </div>}
                    </div>
                    <div className='faqQuestionDiv'>
                        <div onClick={()=>{handleClick('4')}} className='thisQuestion'>
                            <p className='faqQuestions'>Q4. How Can I change password? i forgot my password </p>
                            <span>{open4 && <ArrowDropUp/>}{!open4 && <ArrowDropDown/>}</span>
                        </div>
                        {open4 && <div className='answersDiv'>
                            <p className='faqAnswers'>1. click login button <span style={{textDecoration:'underline',color:'blue'}}><Link to='/register'>click here to register</Link></span></p>
                            <p className='faqAnswers'>2. click forgot password</p>
                            <p className='faqAnswers'>3. then after you pass verification you can reset your password</p>
                              </div>}
                    </div>
                    
                </div>
            
            
            </div>
            <Footer/>
        </div>
    )
}

export default Faq
