import React from "react";
import { Chart } from "react-google-charts";
// reactstrap components
// import { Container } from "reactstrap";

// core components

function TokenEconomics() {
  return (
    <>
        <section id="token-economics">
            <div className="row">
                <div className="col-sm-6">
                <Chart
                    width={'100%'}
                    height={'400px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                      ['Task', 'Hours per Day'],
                      ['Total Supply 1 Quadrillion', 1000000000000000],
                      ['Circulating Supply 600 Trillion', 600000000000000 ],
                      ['Burned Tokens 400 Trillion', 400000000000000],
                    ]}
                    rootProps={{ 'data-testid': '1' }}
                    options={{
                      is3D: true,
                    }}
                  />
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