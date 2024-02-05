import React from 'react';
import '../Css/Header.css'
// import png from '../Assets/text.png'
import gif from '../Assets/ninja.gif'

 import blk from '../Assets/blk2.gif'

// import background from '../Assets/background.png'

function Banner() {
    return (
        <>
        <div id='background' 
        style={{backgroundImage:`url(${blk})`}}>
            <div className="container" >
                <div className="row">
                    <div className="col-lg-6" >
                        <div className="p-5 mt-4"  >
                            <h1 className="display-4 welcome">Welcome to</h1>
                            
                            <h1 className="display-4 head">SUKUYANA</h1><br />
                            <p className="text1"><span id='text'>Most Powerfully</span> Meme Token Ever !</p><br />
                            <a className="button" href="https://pancakeswap.finance/swap?outputCurrency=0x485F66f20F6732017345ff3437377EC84Ea75039" target='_blank'rel='noreferrer'>
                                <button className='buy btn btn-outline-light btn-lg'  >BUY NOW</button></a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src={gif} alt='noimage' width="auto" />
                    </div>
                </div>
            </div>
            </div>
            
        </>


    )
}

export default Banner
