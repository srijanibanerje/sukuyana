import React from 'react'
import bg from '../Assets/burnimg.jpg';
import '../Css/burn.css'
import date from '../Assets/ninja2.png';
import burndate from '../Assets/burndate.jpg';

function Burn() {
    return (
        <>
            <div id="back" style={{ backgroundImage: `url(${bg})` }}>
                <h5 id="text_burn" className='text-center'>SUKUYANA BURN DATES</h5>
                <div className='container contain'>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="p-5 mt-4 burndate">
                                <img src={burndate} width="auto" height="auto" alt='img' />
                            </div>
                        </div>
                        <div className="col-lg-6 ">
                            <div className="p-5 mt-4 text-center">
                                <p className='line1'>This is the link we provide for transparency to our community. Check it out from bscscan.com website!</p>
                                <a className="burnbutton " href='https://bscscan.com/token/0x485f66f20f6732017345ff3437377ec84ea75039?a=0x000000000000000000000000000000000000dead' target='_blank' rel='noreferrer'>
                                    <button className="burndetails btn" type="submit" >Burn details</button></a> <br /><br />
                                <p className='line1'>SUKUYANA (SNA) will be burn 499 trillion token, it is 50% of it's max supply. you can get all burn information and updates.</p>
                                <img src={date} className='burndate' width="auto" height="auto" alt='img' />
                            </div>
                        </div>
                    </div>
                </div>


            </div>


        </>

    )
}

export default Burn
