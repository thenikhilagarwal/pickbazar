import React from 'react';
import Aside from './Aside';
import './Main.css';
import Slider from './Slider';
import WFull from './WFull';

function Main(){
    return(
        <main className='main-section'>
            <Slider/>
            <div className='d-flex bg-light'>
                <Aside/>
                <WFull/>
            </div>
        </main>
    )
}

export default Main;