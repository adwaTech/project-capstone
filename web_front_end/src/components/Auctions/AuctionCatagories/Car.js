import React from 'react';
import Image1 from '../../../assets/images/dhiva-krishna-X16zXcbxU4U-unsplash.jpg';
import Image2 from '../../../assets/images/serge-kutuzov-1K9-TbJWs2U-unsplash.jpg';
import Image3 from '../../../assets/images/tabea-damm-O7WzqmeYoqc-unsplash.jpg';
import moment from 'moment';
import { Data } from '@react-google-maps/api';
import './auctioncatagories.css';
import Button from '@material-ui/core/Button';
import Header from '../../header/Header';

export default function Car() {
    var data=[
        {
            image:Image1,
            price: 1233,
            date: moment(Date.now()).format('yyyy/mm/dd'),
            location:"addis ababa bole ",
            description:"Car name some description"
        },
        {
            image:Image2,
            price: 1233,
            date:  moment(Date.now()).format('yyyy/mm/dd'),
            location:"addis ababa bole ",
            description:"Car name some description"
        },
        {
            image:Image3,
            price: 1233,
            date:  moment(Date.now()).format('yyyy/mm/dd'),
            location:"addis ababa bole ",
            description:"Car name some description"
        },
        {
            image:Image1,
            price: 1233,
            date:  moment(Date.now()).format('yyyy/mm/dd'),
            location:"addis ababa bole ",
            description:"Car name some description"
        },
        {
            image:Image2,
            price: 1233,
            date:  moment(Date.now()).format('yyyy/mm/dd'),
            location:"addis ababa bole ",
            description:"Car name some description"
        },
        {
            image:Image3,
            price: 1233,
            date:  moment(Date.now()).format('yyyy/mm/dd'),
            location:"addis ababa bole ",
            description:"Car name some description"
        },
        {
            image:Image1,
            price: 1233,
            date:  moment(Date.now()).format('yyyy/mm/dd'),
            location:"addis ababa bole ",
            description:"Car name some description"
        },
        {
            image:Image2,
            price: 1233,
            date:  moment(Date.now()).format('yyyy/mm/dd'),
            location:"addis ababa bole ",
            description:"Car name some description"
        },
        {
            image:Image3,
            price: 1233,
            date:  moment(Date.now()).format('yyyy/mm/dd'),
            location:"addis ababa bole ",
            description:"Car name some description"

        }
    ]
    return (
        <div>
            
            <div className="house-auction">
            
            <section class="menu section bd-container" id="menu">
            <span class="section-subtitle">Car</span>
            <h6 class="section-title">list accourding to date of post</h6>
            <div class="menu__container bd-grid ">
            {
                data.map(data=>(
                    
                        <div class="menu__content">
                            <img src={data.image} alt="" class="about__img"/>
                            <h3 class="menu__name">{data.description}</h3>
                            <span class="menu__detail">private</span>
                            <span class="menu__preci">${data.price}</span>
                            <a href="#" class="button menu__button"><i class='bx bx-cart-alt'></i></a>
                            <Button variant="outlined" color="primary">Bid</Button>
                        </div>
                    
                ))
            }
            </div>
            </section>

        </div>
        </div>
    )
}
