import { CardMedia, Container, Typography,Grid,Card,CardContent } from '@material-ui/core'
import React,{useEffect} from 'react'
import Backgorundd from '../../assets/images/Ethiopia.jpg'
import Header from '../header/Header'
import Footer from '../footer/Footer'
export default function ethiopian(){

      return (

        <div>
            <Header/>
                <div className="spaceProvider">

                </div>
            <div style={{display:"flex",flexDirection:"row",gap:"100px"}}>
                <img src={Backgorundd} height="500px" width='600px'/>

                <p style={{marginTop:'50px',fontFamily:"sans-serif",fontStyle:'italic'}}>
                    this is the history of ethiopian
                    Ethiopia is located in the Horn of Africa and borders 
                    with the Sudan and South Sudan to the west; Eritrea to 
                    the north and north-east; Djibouti and Somaliland to the east; 
                    Somalia and Kenya to the south.
                    Ethiopia’s history dates back to the first millennium BCE.The 
                    country's curent capital city, Addis Ababa, was founded by Emperor 
                    Menelik II  in 1887. In 1955, Ethiopia, under Emperor Haile Selassie, 
                    got its first constitution and an elected parliament
                    </p>
                       </div>
                 <Footer/>
        </div>

    )
}