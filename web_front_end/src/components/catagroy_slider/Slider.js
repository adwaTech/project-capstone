import React from 'react';
import './slider.css'

import {strings} from '../../language/language';
import {useSelector} from 'react-redux';
import CardSlider from '../catagroy_slider/CardSlider'

export default function Slider() {
    const lang=useSelector((state)=>state.LanguageReducer.language)
    React.useEffect(()=>{

    },[lang]);
    return (
        <div className="slider">
            <main>
                <div className="text">
                    {/* <h1>{strings.catagories}</h1> */}
                    <h1>
                        {/* {strings.catagorydescription} */}
                    </h1>
                </div>
                <CardSlider/>
            </main>
        </div>
    )
}
