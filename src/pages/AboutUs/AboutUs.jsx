import React from "react";
import PageLoader from "../../components/PageLoader/PageLoader";
import HeaderOne from "../../components/Header/HeaderOne";

const AboutUs = () => {
  return (
    <div>
      <PageLoader />
      <HeaderOne />
      <div className="container">
        <div><br /><br /></div>
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="section-title text-center mb-50">
              <h2 className="title" /*style={{color: 'rgb(39, 220, 139)'}}*/>
                About Us
              </h2>
            </div>
            <p /*style={{color: 'rgb(255, 255, 255)'}}*/>
            HEXIDO is a decentralized exchange platform where the biggest focus is to build 
            mobile dedicated DEX trading, asset storing and managing applications. 
            Currently decentralized exchanges are not fully functional on mobile applications 
            where centralized exchanges provide better UI and trading experience. 
            However, centralized exchanges come with its own issues such as security. <br /><br />

            HEXIDO is set to incorporate FIAT support, enabling users to directly purchase 
            cryptocurrencies using traditional fiat currencies through their HEXIDO Wallet. 
            This implementation will eliminate the HEXIDO plans to introduce 
            a decentralized Know Your Customer (KYC) system, where your identity verification 
            is stored in a decentralized setting, ensuring that your personal information 
            remains confidential and undisclosed to any parties. At any given time, 
            you have the ability to restore your wallet and regain access to your assets 
            by providing a valid proof of identity.<br /><br />
            
            HEXIDO aims to support swaps, orderbook, derivatives and 
            margin trading on a decentralized exchange. 
            The platform will support multiple major blockchains on launch. 
            Market conditions and governance model will be used to decide on expansion 
            to any other blockchain network.<br /><br />

            Platform will support lottery to give a chance to investors in the format of HEXIDO 
            to earn tokens, to bring an investment to the treasury and to reduce the circulating supply. 
            This will create a buy pressure and less sell pressure as certain amount of the tokens 
            will go to the treasury.<br /><br />

            Platform will also support a launchpad where token issuance and distribution 
            will be possible on different blockchain networks. 
            First version of the platform will support mature project right before 
            their Initial Dex Offering (IDO) investment round. 
            Second version of the platform will support the seed investment. 
            Selected projects will be funded to support their early-stage development to be ready 
            for a seed investment stage. HEXIDO, if resources are available, 
            will support the development, business planning and strategy for the success of the project. 
            HEXIDO will partner with VCs and investors to pitch the mature, 
            solid projects for an investment opportunity.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
