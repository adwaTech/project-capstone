<<<<<<< HEAD
import React from 'react';
import image from '../../assets/images/undraw_page_not_found_su7k.svg';
import './error-route.css';
import Warning from '@material-ui/icons/Warning'

export default function ErrorRoute() {
    return (
        // <div className="errorlog">
        //     <h1><Warning color="secondary"/> page not found</h1>
        //     <img src={image} alt=""/>
            
        // </div>
        <div className="error-log">
            <div class="wrapper">
                <div class="TextHolder">
                    <div class="Texts">
                    <div class="FourOhFour">404</div>
                    <div class="Maybe">GUH.. Maybe.. We have <span>PROBLEMS HERE</span></div>
                    <div class="Bad">MY BAD this page couldn't be found.</div>
                    <div class="Return">RETURN HOME</div>
                    </div>
                </div>
                <div class="Body"> 
                    <div class="LeftEye"></div>
                    <div class="RightEye"></div>
                    <div class="EyeShadows"></div>
                    <div class="Mouth"></div>
                    <div class="MouthShadows"></div>
                    <div class="Theet"></div>
                    <div class="BodyTexture"></div>
                </div>
                <div class="Horns">
                    <div class="HornsExtras"></div>
                </div>
                <div class="LeftHand"></div>
                <div class="RightHand"></div>
                </div>
                <h4>Move ur mouse <br/> left or Right :)</h4>
        </div>
    );
=======
import React from 'react'

export default function ErrorRoute() {
    return (
        <div className="errorlog">
            <h1>404 Page Not Found</h1>
        </div>
    )
>>>>>>> main
}
