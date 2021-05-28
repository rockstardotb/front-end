import React from "react";

// reactstrap components
// import { Container } from "reactstrap";

// core components

function HeroSection() {
  return (
    <>
        <video autoplay muted={true} loop id="myVideo">
            <source src="assets/saint-nft.mp4" type="video/mp4"/>
        </video>

        <header className="viewport-header">
            <div className="text-box">
                <h1>
                    Why Saint ?
                </h1>
                <h4>
                    There are more than 2.2 billion children in the world. Many of them are stricken by poverty, sickness, and/or abuse. Most of the problems faced by children can be mitigated through research, product development, and volunteerism, and there are many great organizations working to make an impact, however available funds, or the lack thereof, is an issue. Saint Token is on a mission to change this!
                </h4>
                <h4>
                    Set slippage to 12% on pancakeswap
                    Maximum limit of 5,000,000,000,000 per transaction!
                </h4>
                <div>
                    <button>
                        Buy Saint
                    </button>
                    <button>
                        Buy Saint
                    </button>
                </div>
            </div>
        </header>
    </>
  );
}

export default HeroSection;