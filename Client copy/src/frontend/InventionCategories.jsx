import React from "react";
import Navbar from "./ui/components/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const InventionCategories = () => {
  return (
    <div>
      <Navbar />
      <div className="container category">
        <div className="row flex ">
          <div className="col card">
            <img src="/imgs/categories/space.png" alt="computer" style={{maxWidth: "100px"}}/>
            <h5 className="catname">Technology</h5>
            <div className="count flex">
              <div>
                <FontAwesomeIcon icon={faArrowRight} className="farrow" />
              </div>
            </div>
          </div>
          <div className="col card">
            <img src="/imgs/categories/aeroplane.png" alt="computer" style={{maxWidth: "100px"}}/>
            <h5 className="catname">Transport</h5>
            <div className="count flex">
              <div>
                <FontAwesomeIcon icon={faArrowRight} className="farrow" />
              </div>
            </div>
          </div>
          <div className="col card">
            <img src="/imgs/categories/gear.png" alt="computer" style={{maxWidth: "100px"}}/>
            <h5 className="catname">Engineering</h5>
            <div className="count flex">
              <div>
                <FontAwesomeIcon icon={faArrowRight} className="farrow" />
              </div>
            </div>
          </div>
          <div className="col card">
            <img src="/imgs/categories/broccoli.png" alt="computer" style={{maxWidth: "100px"}}/>
            <h5 className="catname">Agriculture</h5>
            <div className="count flex">
              <div>
                <FontAwesomeIcon icon={faArrowRight} className="farrow" />
              </div>
            </div>
          </div>
          <div className="col card">
            <img src="/imgs/categories/tv.png" alt="computer" style={{maxWidth: "100px"}}/>
            <h5 className="catname">Entertaiment</h5>
            <div className="count flex">
              <div>
                <FontAwesomeIcon icon={faArrowRight} className="farrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventionCategories;
