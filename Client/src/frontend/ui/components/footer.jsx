import React, {useEffect, useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import MobileNav from "./mobileNav";
const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <=768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <=768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    useEffect(() => {
      setCurrentYear(new Date().getFullYear());
    }, []);
  
  return (
  
      <div className="footer flex desktop">
        <Container>
          <Row className="footer-top flex">
            <Col className="contact flex">
             <p>Who Invent What</p>
            </Col>
            <Col className="contact flex">
            <p>Devoped By:<span className="comp"> <a href="https://van.nextlinegh.com" target="_blank"> Van Kelvin</a></span></p>
            </Col>
            <Col className="contact flex">
           <p>&copy; {currentYear}, All right reserved</p>
            </Col>
          </Row>
        </Container>
      </div>
  );
};

export default Footer;
