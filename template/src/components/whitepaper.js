import React from "react";

// reactstrap components
// import { Container } from "reactstrap";

// core components

function TokenEconomics() {
  return (
    <>
        <section id="white-paper">
            <h2>WHITEPAPER</h2>
            <h3>Saint Protocol White Paper</h3>
            <div>
                <h3>Static Rewards, LP Acquisition, Manual Burn, Charitable Donations</h3>
                <p>Similar to the popular SafeMoon protocol (this project was, after all, forked from SafeMoon), Saint Token aims to mitigate the bubble and its unavoidable burst caused by early buyers withdrawing their liquidity to cash in on profits. This is mitigated by the use of static rewards, or reflection.</p>
            </div>
            <div>
                <h3>Why Static?</h3>
                <p>The static rewards offered by Saint Token are based on the volume being traded. These rewards, produced by part of the 10% transaction fee, encourages hodlers to not react to the typical FUD by reflecting an amount of tokens back to them that is proportional to the amount in their wallets. It also discourages whale events. Early adopters are encouraged to take only what is needed so that they can maintain a portion of their holdings to continue receiving reflections, not to mention helping a worthy cause.</p>
            </div>
            <div>
                <h3>Manual Burns</h3>
                <p>Burns will be controlled by the team and the decision to carry out a burn will be dependent on community feedback and current supply and demand trends in the overall market. Once the project is sustainable and ownership can safely be renounced, no more burns will occur.</p>
            </div>
            <div>
                <h3>Automatic Liquidity Pool (LP)</h3>
                <p>As the SAINT token LP increases, a solid price floor and cushion for holders is created in an effort to prevent large dips when whales inevitably sell their tokens.</p>
            </div>
            <div>
                <h3>Charitable Donations</h3>
                <p>The final feature of SAINT, and the heart of the project, is the creation of a charitable wallet from which tokens can be traded back into the liquidity pool for BNB and donated to deserving children-focused charitable organizations. Charitable donations will occur at a minimum of one donation per week and will be featured on the website in the form of a receipt, amount, and the corresponding blockchain transaction to maintain full transparency, as well as to let the community see the impact they are making.</p>
            </div>
            <div>
                <h3>Saint Token’s response to the Certik audit of SafeMoon</h3>
                <p>SafeMoon is a great, well-thought-out project that the cryptocurrency community has latched onto, with good reason. The efforts made by their team and $BEE (the project they forked) provide hodlers with the added security they’ve been looking for in a token. The Saint team decided to build on this effort and made additional updates to the solidity contract, including those recommended in the Certik audit. All changes are very clearly annotated in the verified smart contract, which can be found on bscscan.</p>
            </div>
        </section>
    </>
  );
}

export default TokenEconomics;