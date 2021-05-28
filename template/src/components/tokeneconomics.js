import React from "react";
import { PieChart } from 'react-minimal-pie-chart';
// reactstrap components
// import { Container } from "reactstrap";

// core components

function TokenEconomics() {
  return (
    <>
        <section id="token-economics">
            <div className="row">
                <div className="col-sm-6">
                    <PieChart
                        data={[
                            { title: 'One', value: 10, color: '#E38627' },
                            { title: 'Two', value: 15, color: '#C13C37' },
                            { title: 'Three', value: 20, color: '#6A2135' },
                        ]}
                    />;
                </div>
                <div className="col-sm-6">
                    <h3>Saint Protocol</h3>
                    <h4>Saint Token employs 4 simple functions: Reflection + LP acquisition + Burn + Charitable donations in each trade, the transaction is taxed a 10% fee, which is split 3 ways.</h4>
                    <ul>
                        <li>4% fee is redistributed to all existing holders</li>
                        <li>4% fee is split 50/50 half of which is sold by the contract into BNB, while the other half of the SAINT tokens are paired automatically with the previously mentioned BNB and added as a liquidity pair on Pancake Swap. </li>
                        <li>2% fee = charitable donations</li>
                    </ul>
                </div>
            </div>
        </section>
    </>
  );
}

export default TokenEconomics;