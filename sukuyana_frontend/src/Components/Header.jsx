import React from 'react'
import logo from '../Assets/logo.gif'



import '../Css/Header.css'

function Header() {
  return (
    <>
      
       <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
  <div className="container">

       <img id='logo' src={logo} alt='noimage' width="10%"/>
       <h2 style={{color:"white"}}>SUKUYANA</h2>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav" >
      <ul className="navbar-nav" 
       style={{marginLeft:"15%"}}>
        <li className="item nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="item nav-item">
          <a className="nav-link" href="#introduction">Introduction</a>
        </li>
        <li className="item nav-item">
          <a className="nav-link" href="#tokenomics">Tokenomics</a>
        </li>
        <li className="item nav-item">
          <a className="nav-link" href="#roadmap">Roadmap</a>
        </li>
        <li className="item nav-item" id='burn'>
          <a className="nav-link" href="/" >Burn</a>
        </li>
      </ul>  
    </div>
     <form className="form-inline my-2 my-lg-0">
     <a href='https://drive.google.com/file/d/13dbBXQ5hn_4ZPCX-v5zWQo4HoXqqYUX9/view?usp=sharing' className='button' target='_blank' rel='noreferrer'>
          <button className="buybutton btn btn-outline-light" type="submit" >WHITEPAPER</button></a>
   </form>
  </div>
</nav> 

    </>
  )
}

export default Header
