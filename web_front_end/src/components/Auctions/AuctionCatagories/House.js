import React from 'react';
import Image1 from '../../../assets/images/daniel-korpai-r73OFSry5AI-unsplash.jpg';
import Image2 from '../../../assets/images/priscilla-du-preez-3gAiajAfjXI-unsplash.jpg';
import Image3 from '../../../assets/images/webaliser-_TPTXZd9mOo-unsplash.jpg';
import moment from 'moment';
import { Data } from '@react-google-maps/api';
import './auctioncatagories.css';
import Button from '@material-ui/core/Button';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import {strings} from '../../../language/language';
import {useSelector} from 'react-redux'

export default function House() {
    const lang=useSelector((state)=>state.LanguageReducer.language)
    React.useEffect(()=>{},[lang]);
    var data=[
        {
            image:Image1,
            price: 1233,
            date: moment(Date.now()).format('yyyy/mm/dd'),
            location:"addis ababa bole ",
            description:"House name some description"
        },
        {
            image:Image2,
            price: 1233,
            date:  moment(Date.now()).format('yyyy/mm/dd'),
            location:"addis ababa bole ",
            description:"House name some description"
        },
        {
            image:Image3,
            price: 1233,
            date:  moment(Date.now()).format('yyyy/mm/dd'),
            location:"addis ababa bole ",
            description:"House name some description"
        },
        {
            image:Image1,
            price: 1233,
            date:  moment(Date.now()).format('yyyy/mm/dd'),
            location:"addis ababa bole ",
            description:"House name some description"
        },
        {
            image:Image2,
            price: 1233,
            date:  moment(Date.now()).format('yyyy/mm/dd'),
            location:"addis ababa bole ",
            description:"House name some description"
        },
        {
            image:Image3,
            price: 1233,
            date:  moment(Date.now()).format('yyyy/mm/dd'),
            location:"addis ababa bole ",
            description:"House name some description"
        },
        {
            image:Image1,
            price: 1233,
            date:  moment(Date.now()).format('yyyy/mm/dd'),
            location:"addis ababa bole ",
            description:"House name some description"
        },
        {
            image:Image2,
            price: 1233,
            date:  moment(Date.now()).format('yyyy/mm/dd'),
            location:"addis ababa bole ",
            description:"House name some description"
        },
        {
            image:Image3,
            price: 1233,
            date:  moment(Date.now()).format('yyyy/mm/dd'),
            location:"addis ababa bole ",
            description:"House name some description"

        }
    ]
    return (
        <div>
            <Header/>
            <div className="house-auction">
            
            <section class="menu section bd-container" id="menu">
            <span class="section-subtitle">{strings.House}</span>
            <h6 class="section-title">{strings.listbydate}</h6>
            <div class="menu__container bd-grid ">
            {
                data.map(data=>(
                    
                        <div class="menu__content">
                            <img src={data.image} alt="" class="about__img"/>
                            <h3 class="menu__name">{data.description}</h3>
                            <span class="menu__detail">private</span>
                            <span class="menu__preci">${data.price}</span>
                            <a href="#" class="button menu__button"><i class='bx bx-cart-alt'></i></a>
                            <Button variant="outlined" color="primary">{strings.bid}</Button>
                        </div>
                    
                ))
            }
            </div>
            </section>
            
            </div>
            
        </div>
    )
}
