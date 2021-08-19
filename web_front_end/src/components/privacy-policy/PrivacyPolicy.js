import React from 'react'
import ScrollToTop from '../../scrollTop/ScrollToTop'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import './privacy.css'
function PrivacyPolicy() {
    return (
        <div>
            <ScrollToTop/>
            <Header/>  
               <div className='privacyDiv'>
                <div className='privacyContents'>
                    <h2 style={{marginBottom:'20px'}}>Our Privacy Policy</h2>
                     <p className='privacyParagraphs'>
                        This privacy policy sets out how M3K Online Auction System uses and protects any information that you give M3K Online Auction System when you use this website.
                        <br/>
                        M3K Online Auction System is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website then you can be assured that it will only be used in accordance with this privacy statement.
                        <br/>
                        M3K Online Auction System may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes. This policy is effective from Aug 27, 2021.
                     </p>
                     <h3 className='privacyTitles'>What we collect</h3>
                     <p className='privacyParagraphs'>We may collect the following information:</p>
                     <ul className="privacyLists">
                         <li className='privacyParagraphs'>name and job title</li>
                         <li className='privacyParagraphs'>contact information including email address</li>
                         <li className='privacyParagraphs'>demographic information such as postcode, preferences and interests</li>
                         <li className='privacyParagraphs'>other information relevant to customer surveys and/or offers</li>
                     </ul>
                     <h3 className='privacyTitles'>What we do with the information we gather</h3>
                     <p className='privacyParagraphs'>We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:</p>
                     <ul className="privacyLists">
                         <li className='privacyParagraphs'>Internal record keeping.</li>
                         <li className='privacyParagraphs'>We may use the information to improve our products and services.</li>
                         <li className='privacyParagraphs'>We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided.</li>
                         <li className='privacyParagraphs'>From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail. We may use the information to customize the website according to your interests.</li>
                     </ul>
                     <h3 className='privacyTitles'>Security</h3>
                     <p className='privacyParagraphs'>We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.</p>
                    <h3 className='privacyTitles'>How we use cookies</h3>
                     <p className='privacyParagraphs'>
                       A cookie is a small file which asks permission to be placed on your computer’s hard drive. Once you agree, the file is added and the cookie helps analyze web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences.
                       <br/>
                       We use traffic log cookies to identify which pages are being used. This helps us analyze data about web page traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system.
                       <br/>
                       Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us.
                       <br/>
                       You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.
                     </p>
                     <h3 className='privacyTitles'>Links to other websites</h3>
                     <p className='privacyParagraphs'>
                        Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.
                     </p>
                </div>
              </div>
            <Footer/>
        </div>
    )
}

export default PrivacyPolicy