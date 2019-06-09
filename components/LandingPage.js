import React from 'react';
import './LandingPage.css';
import { Container, Col, Row } from 'react-bootstrap';
import ThetaTauCoat from '../images/theta-tau-coat.png';
import InstagramLogo from '../images/instagram-logo.png';

function LandingPage() {
  return (
      <div className="landing-page-div">

        <Container>
            {/*Title*/}
            <Row>
                
                <Col xs>
                </Col>

                {/*Title column*/}
                <Col xs={6} className="text-center">
                    <h1>Rush Theta Tau</h1>
                    <h4>Professional Engineering Co-ed Fraternity</h4>
                </Col>

                <Col xs>
                </Col>
            </Row>

            {/*Flyer body*/}
            <Row className="flyer-body">
                {/*Week 1 events*/}
                <Col xsclassName="text-center">
                    <h5>Week 1</h5>
                    <div className="event-entry">
                        <h6>Info session #1</h6>
                        <h7>September 1, 6:00pm</h7>
                        <p>EC 2300</p>
                        <p></p>
                    </div>
                </Col>

                {/* Logo space*/}
                <Col xs className="text-center theta-tau-coat">
                    <a href="https://thetatau.fiu.edu/" target="_blank" rel="noopener noreferrer">
                        <img id="slidecaption" className="image-shine coat-image"
                            src={ThetaTauCoat} alt="theta tau coat of arms" title="Click me"/>
                     </a>
                </Col>




                {/* Week 2 events*/}
                <Col xs className="text-center">
                    <h5>Week 2</h5>
                </Col>
            </Row>    

            <Row className="bottom-row text-center">
                <Col xs className="social-media-section">
                    <a className="link" href="https://www.instagram.com/thetataufiu/" target="_blank" rel="noopener noreferrer">
                    <img className="logo" src={InstagramLogo} alt="instagram logo"/>
                    <span className="link-text" title="Click to follow">Follow us on Instagram</span></a>


                    <div className="addresses">
                        <div className="address-entry">
                            <h5><a className="gold-text link-no-deco" 
                            href="https://campusmaps.fiu.edu/index.html#/campus/EC" 
                            target="_blank" rel="noopener noreferrer" title="View map">Engineering Center(EC)</a></h5>
                            <p>10555 W Flagler St, Miami, FL 33174</p>
                        </div>
                        <div className="address-entry">
                            <h5><a className="gold-text link-no-deco" 
                            href="https://campusmaps.fiu.edu/index.html#/campus/MMC" 
                            target="_blank" rel="noopener noreferrer" title="View map">Modesto Maidique Campus (MMC)</a></h5>
                            <p>11200 SW 8th St, Miami, FL 33199</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default LandingPage;