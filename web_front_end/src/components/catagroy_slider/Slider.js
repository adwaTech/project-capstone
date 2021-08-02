import React from 'react';
import './slider.css'
import Image2 from '../../assets/images/federico-respini-sYffw0LNr7s-unsplash.jpg';
import Image3 from '../../assets/images/paul-einerhand-uyDHQc128DA-unsplash.jpg';
import Image4 from '../../assets/images/samantha-borges-EeS69TTPQ18-unsplash.jpg';
import Image5 from '../../assets/images/lode-lagrainge-45cr4wHWTIw-unsplash.jpg';
import Image6 from '../../assets/images/annie-spratt-JMjNnQ2xFoY-unsplash.jpg';
import Image7 from '../../assets/images/adele-payman-2oYMwuFgnTg-unsplash.jpg';
import Image9 from '../../assets/images/max-O_TVsaeZNlE-unsplash.jpg';
import Image10 from '../../assets/images/yuriy-bogdanov-W51VK3Obcj0-unsplash.jpg';
import Image11 from '../../assets/images/webaliser-_TPTXZd9mOo-unsplash.jpg';
import Image12 from '../../assets/images/abhinav-raina-cyQiSGGDThQ-unsplash.jpg';
import Image13 from '../../assets/images/naomi-hebert-MP0bgaS_d1c-unsplash.jpg';
import Image14 from '../../assets/images/sieuwert-otterloo-aren8nutd1Q-unsplash.jpg';
import BackIcon from '@material-ui/icons/ArrowBackIos';
import ForwardIcon from '@material-ui/icons/ArrowForwardIos';
import { Star } from '@material-ui/icons';
import moment from 'moment';

export default function Slider() {

    let right_mover = ()=>{
        let span = document.getElementsByTagName('span');
        let product = document.getElementsByClassName('product')
        let product_page = Math.ceil(product.length/4);
        let l = 0;
        let movePer = 25.34;
        let maxMove = 203;
        // mobile_view	
        let mob_view = window.matchMedia("(max-width: 768px)");
        if (mob_view.matches)
        {
            movePer = 50.36;
            maxMove = 504;
        }

        l = l + movePer;
        if (product == 1){l = 0; }
        for(const i of product)
        {
            if (l > maxMove){l = l - movePer;}
            i.style.left = '-' + l + '%';
        }

    }
    let left_mover = ()=>{
        let span = document.getElementsByTagName('span');
        let product = document.getElementsByClassName('product')
        let product_page = Math.ceil(product.length/4);
        let l = 0;
        let movePer = 25.34;
        let maxMove = 203;
        // mobile_view	
        let mob_view = window.matchMedia("(max-width: 768px)");
        if (mob_view.matches)
        {
            movePer = 50.36;
            maxMove = 504;
        }

        l = l - movePer;
        if (l<=0){l = 0;}
        for(const i of product){
            if (product_page>1){
                i.style.left = '-' + l + '%';
            }
        }
    }
    var data=[
        {
            title:"title",
            date1:moment(Date.now()).format("YYYY/MM/DD"),
            discription:"this is mesi this is mesi this is mesi",
            date2:moment(Date.now()).format("YYYY/MM/DD"),
            location:"addis abeba bole",
            image:Image2,
        },
        {
            title:"title",
            date1:moment(Date.now()).format("YYYY/MM/DD"),
            discription:"this is mesi this is mesi this is mesi",
            date2:moment(Date.now()).format("YYYY/MM/DD"),
            location:"addis abeba bole",
            image:Image3
        },
        {
            title:"title",
            date1:moment(Date.now()).format("YYYY/MM/DD"),
            discription:"this is mesi this is mesi this is mesi",
            date2:moment(Date.now()).format("YYYY/MM/DD"),
            location:"addis abeba bole",
            image:Image4
        },
        {
            title:"title",
            date1:moment(Date.now()).format("YYYY/MM/DD"),
            discription:"this is mesi this is mesi this is mesi",
            date2:moment(Date.now()).format("YYYY/MM/DD"),
            location:"addis abeba bole",
            image:Image5
        },
        {
            title:"title",
            date1:moment(Date.now()).format("YYYY/MM/DD"),
            discription:"this is mesi this is mesi this is mesi",
            date2:moment(Date.now()).format("YYYY/MM/DD"),
            location:"addis abeba bole",
            image:Image6
        },
        {
            title:"title",
            date1:moment(Date.now()).format("YYYY/MM/DD"),
            discription:"this is mesi this is mesi this is mesi",
            date2:moment(Date.now()).format("YYYY/MM/DD"),
            location:"addis abeba bole",
            image:Image7
        },
        {
            title:"title",
            date1:moment(Date.now()).format("YYYY/MM/DD"),
            discription:"this is mesi this is mesi this is mesi",
            date2:moment(Date.now()).format("YYYY/MM/DD"),
            location:"addis abeba bole",
            image:Image10
        },
    ]
    return (
        <div className="slider">
            <main>
                <div className="text">
                    <h1>Catagories</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam non atque adipisci est, recusandae aperiam, ullam minima quos nostrum animi voluptas sequi. At repellendus fuga reiciendis accusantium, dolor suscipit repellat?
                    </p>
                </div>
                <header>
                    <h1>Well Known Catagries</h1>
                    <p>
                        <span onClick={
                            ()=>{
                                left_mover();
                            }
                        }
                        ><BackIcon /></span>
                        <span onClick={()=>{
                            right_mover();
                        }}
                        ><ForwardIcon/></span>
                    </p>
                </header>
                <section>
                    {
                        data.map((newindex,i)=>(
                            <div className="product" key={i}>
                                <picture>
                                    <img src={newindex.image} alt=""/>
                                </picture>
                                <div classNameName="information">
                                <div className="detail">
                                    <p>
                                        <b>{newindex.title}</b><br/>
                                        <small>{newindex.discription}</small>
                                    </p>
                                    <p>start{newindex.date1}</p>
                                    <p>end{newindex.date2}</p>
                                </div>
                                    <div className="btn">
                                        <p className="star">
                                            <Star/>
                                            <Star/>
                                            <Star/>
                                            <Star/>
                                        </p>
                                        <a href="#">Sea More</a>
                                    </div>
                                </div>
                            </div>
                    
                        ))
                    }
                    
                </section>
            </main>
        </div>
    )
}
