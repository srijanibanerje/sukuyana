import React from 'react'
import { MDBCard, MDBCardBody, MDBContainer } from "mdb-react-ui-kit";
import '../Css/roadmap2.css'
import pic1 from '../Assets/artpng2.png';
import pic2 from '../Assets/artpng3.png';
import pic3 from '../Assets/artpng4.png';
import pic4 from '../Assets/pic4.png';
import pic5 from '../Assets/pic5.png';
import pic6 from '../Assets/pic6.png';
import pic7 from '../Assets/pic7.png';
import pic8 from '../Assets/pic8.png';
import pic9 from '../Assets/pic10.png';
import piccycle from '../Assets/piccycle.png';

function Roadmap2() {
  return (
    <div className="container" id='roadmap'>
      {/* style={{ backgroundColor: "rgb(38, 38, 38)" }}> */}
      <h5 id="text_roadmap">SUKUYANA ROADMAP<img src={piccycle} alt="img" width="15%" /></h5>
      <MDBContainer className="py-5" >
        <h5 className='phase text-center'>Phase 1</h5>

        <div className="main-timeline">
          <div className="timeline left">
            <MDBCard className='leftimg'>
              <MDBCardBody className=" cardbody p-4">
                {/* <h3>1</h3> */}
                <img src={pic1} alt='noimg' className='img' width="55%" />

                <p className="paragraph" style={{ marginLeft: "44%" }}>
                  Idea Creation , deploy.
                  <i className="fa fa-check-circle circlegreen" style={{ fontSize: "20px", color: "greenyellow" }} ></i>

                </p>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="timeline right">
            <MDBCard className='rightimg'>
              <MDBCardBody className=" cardbody p-4">
                <img src={pic2} alt='noimg' className='img' width="55%" />
                {/* <h3>2</h3> */}
                <p className="paragraph" style={{ marginLeft: "47%" }}>
                  Market warm-up, early business cooperation.
                  <i className="fa fa-check-circle circlegreen" style={{ fontSize: "20px", color: "greenyellow" }} ></i>
                </p>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="timeline left">
            <MDBCard className='leftimg'>
              <MDBCardBody className="cardbody p-4">
                <img src={pic3} alt='noimg' className='img' width="58%" />
                {/* <h3>3</h3> */}
                <p className="paragraph" style={{ marginLeft: "47%" }} >
                  launch website, twitter, telegram, e.t.c.
                  <i className="fa fa-check-circle circlegreen" style={{ fontSize: "20px", color: "greenyellow" }} ></i>
                </p>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="timeline right">
            <MDBCard className='rightimg'>
              <MDBCardBody className="cardbody p-4">
                <img src={pic4} alt='noimg' className='img' width="45%" />
                {/* <h3>4</h3> */}
                <p className="paragraph" style={{ marginLeft: "38%" }}>
                  IEO on tier A CEX & listing.
                  <i className="fa fa-check-circle circlegreen" style={{ fontSize: "20px", color: "greenyellow" }} ></i>
                </p>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="timeline left">
            <MDBCard className='leftimg'>
              <MDBCardBody className=" cardbody p-4">
                <img src={pic5} alt='noimg' className='img' width="52%" />
                {/* <h3>5</h3> */}
                <p className="paragraph" style={{ marginLeft: "36%" }}>
                  10,000 telegram members.
                  <i className="fa fa-check-circle" style={{ fontSize: "20px", color: "greenyellow" }} ></i>
                </p>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="timeline right">
            <MDBCard className='rightimg'>
              <MDBCardBody className=" cardbody p-4">
                {/* <h3>6</h3> */}
                <img src={pic9} alt='noimg' className='img' width="35%" />
                <p className="paragraph" style={{ marginLeft: "33%" }}>
                  listing on pancakeswap.
                  <i className="fa fa-check-circle circlegreen" style={{ fontSize: "20px", color: "greenyellow" }} ></i>
                </p>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="timeline left">
            <MDBCard className='leftimg'>
              <MDBCardBody className="cardbody p-4">
                <img src={pic7} alt='noimg' className='img' width="55%" />
                {/* <h3>7</h3> */}
                <p className="paragraph" style={{ marginLeft: "47%" }} >
                  Apply for listing on Coingecko.
                  <i className="fa fa-check-circle circlegreen" style={{ fontSize: "20px", color: "greenyellow" }} ></i>
                </p>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="timeline right">
            <MDBCard className='rightimg'>
              <MDBCardBody className="cardbody p-4">
                {/* <h3>8</h3> */}
                <img src={pic8} alt='noimg' className='img' width="45%" />
                <p className="paragraph" style={{ marginLeft: "36%" }}>
                  Apply for listing on Coinranking.
                  <i className="fa fa-check-circle circlegreen" style={{ fontSize: "20px", color: "greenyellow" }} ></i>
                </p>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="timeline left">
            <MDBCard className='leftimg'>
              <MDBCardBody className="cardbody p-4">
                <img src={pic2} alt='noimg' className='img' width="55%" />
                <p className="paragraph" style={{ marginLeft: "50%" }} >
                  Thirdparty audit
                  <i className="fa fa-check-circle circlegreen" style={{ fontSize: "20px", color: "greenyellow" }} ></i>
                </p>
              </MDBCardBody>
            </MDBCard>
          </div>

        </div>
        <h5 className='phase text-center'>Phase 2</h5>
        <div className="main-timeline">


          <div className="timeline right">
            <MDBCard className='rightimg'>
              <MDBCardBody className=" cardbody p-4">
                <img src={pic3} alt='noimg' className='img' width="55%" />
                {/* <h3>2</h3> */}
                <p className="paragraph" style={{ marginLeft: "44%" }}>
                  launching influencer marketing.
                  <i className="fa fa-check-circle" style={{ fontSize: "20x", color: "greenyellow" }} ></i>
                </p>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="timeline left">
            <MDBCard className='leftimg'>
              <MDBCardBody className="cardbody p-4">
                <img src={pic4} alt='noimg' className='img' width="57%" />
                {/* <h3>3</h3> */}
                <p className="paragraph" style={{ marginLeft: "48%" }}>
                  Apply for listing on Coinmerketcap.
                  <i className="fa fa-check-circle circlegreen" style={{ fontSize: "20px", color: "greenyellow" }} ></i>
                </p>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="timeline right">
            <MDBCard className='rightimg'>
              <MDBCardBody className="cardbody p-4">
                <img src={pic1} alt='noimg' className='img' width="45%" />
                {/* <h3>4</h3> */}
                <p className="paragraph" style={{ marginLeft: "34%" }}>
                  Cooperate with, metamusk, trust wallet, tokenpocket etc.
                  <i className="fa fa-check-circle circlegreen" style={{ fontSize: "20px", color: "greenyellow" }} ></i>
                </p>

              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="timeline left">
            <MDBCard className='leftimg'>
              <MDBCardBody className=" cardbody p-4">
                <img src={pic6} alt='noimg' className='img' width="48%" />
                {/* <h3>5</h3> */}
                <p className="paragraph" style={{ marginLeft: "41%" }}>
                  Listing another CMC listed CEX.
                  <i className="fa fa-check-circle circlegreen" style={{ fontSize: "20px", color: "greenyellow" }} ></i>
                </p>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="timeline right">
            <MDBCard className='rightimg'>
              <MDBCardBody className=" cardbody p-4">
                {/* <h3>6</h3> */}
                <img src={pic7} alt='noimg' className='img' width="45%" />
                <p className="paragraph" style={{ marginLeft: "38%" }}>
                  25,000 telegram members.
                  <i className="fa fa-check-circle circlegreen" style={{ fontSize: "20px", color: "greenyellow" }} ></i>
                </p>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="timeline left">
            <MDBCard className='leftimg'>
              <MDBCardBody className="cardbody p-4">
                <img src={pic8} alt='noimg' className='img' width="55%" />
                {/* <h3>7</h3> */}
                <p className="paragraph" style={{ marginLeft: "44%" }}>
                  10,000 holders.
                  <i className="fa fa-check-circle circlegreen" style={{ fontSize: "20px", color: "white" }} ></i>
                </p>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="timeline right">
            <MDBCard className='rightimg'>
              <MDBCardBody className="cardbody p-4">
                {/* <h3>8</h3> */}
                <img src={pic5} alt='noimg' className='img' width="45%" />
                <p className="paragraph" style={{ marginLeft: "33%" }}>
                  Big centralised exchange listing.
                  <i className="fa fa-check-circle circlegreen" style={{ fontSize: "20px", color: "white" }} ></i>
                </p>
              </MDBCardBody>
            </MDBCard>
          </div>
          <div className="timeline left">
            <MDBCard className='leftimg'>
              <MDBCardBody className="cardbody p-4">
                <img src={pic1} alt='noimg' className='img' width="58%" />
                <p className="paragraph" style={{ marginLeft: "45%" }}>
                  Develop for BETA and testing NFT market.
                  <i className="fa fa-check-circle circlegreen" style={{ fontSize: "20px", color: "white" }} ></i>
                </p>
              </MDBCardBody>
            </MDBCard>
          </div>

        </div>
      </MDBContainer>
    </div>
  )
}

export default Roadmap2
