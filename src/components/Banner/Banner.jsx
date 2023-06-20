import React from "react";
import shape01 from "../../assets/img/banner/banner_shape01.png";
import shape02 from "../../assets/img/banner/banner_shape02.png";
import shape03 from "../../assets/img/banner/banner_shape03.png";
// import fireIcon from "../../assets/img/icon/fire.png";
import CountDownOne from "../CountDown/CountDownOne";

const Banner = (props) => {
  return (
    <section className="banner-area banner-bg">
      <div className="banner-shape-wrap">
        <img src={shape01} alt="" className="img-one" />
        <img src={shape02} alt="" className="img-two" />
        <img src={shape03} alt="" className="img-three" />
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="banner-content text-center">
              <img src="" alt="" />
              <h2 className="title">
                Hybrid Exchange and Launchpad<br></br>
                <span style={{ color: 'rgb(39, 220, 139)' }} >Power to the people with DeFi</span>
              </h2>
            </div>
            {/* <div className="banner-progress-wrap">
              <ul>
                <li>Pre Sell</li>
                <li>Bonus</li>
              </ul>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
              <h4 className="title">
                65% target raised <span>1 ETH = $1000 = 3177.38 CIC</span>
              </h4>
            </div> */}

            <div className="row justify-content-center">
              <div className="col-xl-8">
                <div className="section-title text-center mb-50">
                  <h2 className="title" style={{color: 'rgb(39, 220, 139)'}}>
                    What makes us HYBRID?
                  </h2>
                </div>
                <p style={{color: 'rgb(255, 255, 255)'}}>
                HEXIDO is set to incorporate FIAT support, enabling users to directly purchase cryptocurrencies 
                using traditional fiat currencies through their HEXIDO Wallet. 
                This implementation will eliminate the necessity of relying on centralized exchanges for cryptocurrency purchases, 
                granting users the ability to trade assets on a decentralized exchange.
              </p>
              </div>
            </div>

          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="banner-countdown-wrap text-center">
              {/* <h2 className="title">ICO Will Start In..</h2> */}

              {/* <CountDownOne /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
