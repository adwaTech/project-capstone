import React from 'react'
import Header from '../header/Header'
import Footer  from '../footer/Footer';
import Auctions from './Auctions';

export default function Index() {
    return (
        <div style={{background:"#eee"}}>
            <Auctions/>
        </div>
    )
}
