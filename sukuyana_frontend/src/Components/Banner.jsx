import React from 'react';
import '../Css/Header.css'
// import png from '../Assets/text.png'
import img1 from '../Assets/img1.png'

// import background from '../Assets/background.png'

function Banner() {
    return (
        <>
            <div className="container">
            {/* style={{backgroundImage:`url(${background})`}} */}
            
                <div className="row">
                    <div className="col-lg-6">
                        <div className="p-5 mt-4">
                            <h1 className="display-4 welcome">Welcome to</h1>
                            <h1 className="display-4 head">SUKUYANA</h1><br />
                            <p className="text1"><span id='text'>Most Powerfully</span> Meme Token Ever !</p><br />
                            <a className="button" href="https://pancakeswap.finance/swap?outputCurrency=0x485F66f20F6732017345ff3437377EC84Ea75039" target='_blank'rel='noreferrer'>
                                <button className=' btn btn-outline-light btn-lg' >BUY NOW</button></a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src={img1} alt='noimage' width="88%" />
                    </div>
                </div>
            </div>
            
        </>


    )
}

export default Banner
