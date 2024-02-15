import React from 'react'
import '../Css/Footer.css'
import logo from '../Assets/logo.gif'

function Footer() {
    return (
        <footer id="footer" className="footer-1">
            <div className="main-footer widgets-dark typo-light">
                <div className="container">
                    <div className="row">

                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="widget subscribe no-box">
                                <h5 className="widget-title"> <img src={logo} alt='noimage' width="40%" /> SUKUYANA</h5>
                                <p>Our community is too strong , SUKUYANA will be the killer of any meme coin in crypto currency world. </p>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="widget no-box">
                                <h5 className="widget-title">Quick Links<span></span></h5>
                                <ul className="thumbnail-widget">
                                    <li>
                                        <div className="thumb-content"><a href="/" className='links'>Home</a></div>
                                    </li>
                                    <li>
                                        <div className="thumb-content"><a href="#introduction" className='links'>Introduction</a></div>
                                    </li>
                                    <li>
                                        <div className="thumb-content"><a href="#tokenomics" className='links'>Tokenomics</a></div>
                                    </li>
                                    <li>
                                        <div className="thumb-content"><a href="#roadmap" className='links'>Roadmap</a></div>
                                    </li>
                                    <li>
                                        <div className="thumb-content"><a href="#back" className='links'>Burns</a></div>
                                    </li>
                                    

                                </ul>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-3">
                            <div className="widget no-box">
                                <h5 className="widget-title">Contract Address<span></span></h5>
                                <p>Get access to your full Training and Marketing Suite.</p>
                                {/* <a className="btn" href="https://bit.ly/3m9avif" target="_blank">Subscribe Now</a> */}
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-3">

                            <div className="widget no-box">
                                <h5 className="widget-title">Contact Us</h5>

                                {/* <p><a href="mailto:info@domain.com" title="glorythemes">info@domain.com</a></p> */}
                                <ul className="social-footer2">
                                    <li ><a  className='links' target="_blank"rel='noreferrer' href="https://medium.com/@sukuyanatoken">
                                        <i className="fa fa-medium" style={{ fontSize: "24px" }} ></i>
                                    </a></li>

                                    <li className="">
                                        <a className='links' href='https://t.me/sukuyanatoken' target="_blank"rel='noreferrer'>
                                             <i className="fa fa-telegram" style={{ fontSize: "24px" }}></i></a>
                                    </li>

                                    <li className=""><a className='links' href="https://twitter.com/Sukuyanatoken" target="blank" title="Twitter">
                                        <i className="fa fa-twitter" style={{ fontSize: "24px" }}></i></a></li>
                                    <li className=""><a  className='links' title="instagram" target="_blank" rel='noreferrer' href="https://www.instagram.com/sukuyana_token/">
                                        <i className="fa fa-instagram" style={{ fontSize: "24px" }}></i></a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="footer-copyright">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <p>Copyright  SUKUYANA team © 2024. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer