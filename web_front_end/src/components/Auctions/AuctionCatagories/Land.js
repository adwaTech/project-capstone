import React from 'react';
import Image1 from '../../../assets/images/gozha-net-xDrxJCdedcI-unsplash.jpg';
import Image2 from '../../../assets/images/benjamin-davies-Zm2n2O7Fph4-unsplash.jpg';
import Image3 from '../../../assets/images/adele-payman-2oYMwuFgnTg-unsplash.jpg';
import moment from 'moment';
import { Data } from '@react-google-maps/api';
import './auctioncatagories.css';
import Button from '@material-ui/core/Button';
import {strings} from '../../../language/language';
import {useSelector} from 'react-redux'

export default function Land() {
    const lang=useSelector((state)=>state.LanguageReducer.language)
    React.useEffect(()=>{},[lang]);
    var data=[
        {
            image:Image1,
            price: 1233,
            date: moment(Date.now()).format('yyyy/mm/dd'),
            location:"addis ababa bole ",
            description:"Land name some description"
        },
        {
            image:Image2,
            price: 1233,
            date:  moment(Date.now()).format('yyyy/mm/dd'),
            location:"addis ababa bole ",
            description:"Land name some description"
        },
        {
            image:Image3,
            price: 1233,
            date:  moment(Date.now()).format('yyyy/mm/dd'),
            location:"addis ababa bole ",
            description:"Land name some description"
        },
        {
            image:Image1,
            price: 1233,
            date:  moment(Date.now()).format('yyyy/mm/dd'),
            location:"addis ababa bole ",
            description:"Land name some description"
        },
        {
            image:Image2,
            price: 1233,
            date:  moment(Date.now()).format('yyyy/mm/dd'),
            location:"addis ababa bole ",
            description:"Land name some description"
        },
        {
            image:Image3,
            price: 1233,
            date:  moment(Date.now()).format('yyyy/mm/dd'),
            location:"addis ababa bole ",
            description:"Land name some description"
        },
        {
            image:Image1,
            price: 1233,
            date:  moment(Date.now()).format('yyyy/mm/dd'),
            location:"addis ababa bole ",
            description:"Land name some description"
        },
        {
            image:Image2,
            price: 1233,
            date:  moment(Date.now()).format('yyyy/mm/dd'),
            location:"addis ababa bole ",
            description:"Land name some description"
        },
        {
            image:Image3,
            price: 1233,
            date:  moment(Date.now()).format('yyyy/mm/dd'),
            location:"addis ababa bole ",
            description:"Land name some description"

        }
    ]
    return (
        <div className="house-auction">
            <section class="menu section bd-container" id="menu">
            <span class="section-subtitle">{strings.Land}</span>
            <h6 class="section-title">{strings.listbydate}</h6>
            <div class="menu__container bd-grid ">
            {
                data.map(data=>(
                    
                        <div class="menu__content">
                            <img src={data.image} alt="" class="about__img"/>
                            <h3 class="menu__name">{data.description}</h3>
                            <span class="menu__detail">{strings.private}</span>
                            <span class="menu__preci">${data.price}</span>
                            <a href="#" class="button menu__button"><i class='bx bx-Landt-alt'></i></a>
                            <Button variant="outlined" color="primary">{strings.bid}</Button>
                        </div>
                    
                ))
            }
            </div>
            </section>

        </div>
    )
}
