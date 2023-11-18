import React, { useEffect, useState } from "react";
import MobileNav from "./mobileNav";
const Footer = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div className="footer  desktop">
      <hr className="divider" />
      <div className="container">
        <div className="row flex ">
          <div className="col contact flex">
            <p>Who Invent What</p>
            <p>
                Devoped By:
                <span className="comp">
                  <a href="https://van.nextlinegh.com" target="_blank">
                    {" "}
                    Van Kelvin
                  </a>
                </span>
              </p>
          </div>
          <div className="col contact flex">
            <p>&copy; {currentYear}, All right reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
