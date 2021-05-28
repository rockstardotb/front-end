import React from "react";

// reactstrap components
// import { Container } from "reactstrap";

// core components

function TokenEconomics() {
  return (
    <>
        <section id="nft-airdrops">
        <div className="text-box">
            <h3>NFT Air drops</h3>
            <h4>Periodically we will be airdropping NFTs as rewards for holders this is to give back to our community.</h4>
            <button>Join our telegram group</button>
        </div>
        <div className="countdown">
            <h3>Comming Soon !</h3>
            <div class="timer">
                <div>
                    0 <br/> days
                </div>
                <div>
                    0 <br/> hours
                </div>
                <div>
                    0 <br/> minutes
                </div>
                <div>
                    0 <br/> seconds
                </div>
            </div>
        </div>
    </section>
    </>
  );
}

export default TokenEconomics;