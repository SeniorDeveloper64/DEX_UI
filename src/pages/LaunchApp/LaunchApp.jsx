import React from 'react';
import PageLoader from "../../components/PageLoader/PageLoader";
import HeaderLaunchPage from "../../components/Header/HeaderLaunchPage";
import ETHUSDChart from './ETHUSDChart';
import ETHUSDSwapSection from './ETHUSDSwap';
import { Link } from "react-router-dom";


const LaunchApp = () => {
   return (
    <div>
      <PageLoader />
      <HeaderLaunchPage />
      <div class="row align-items-center bd-approach-wrap">
        <div class="col-lg-4">
          <ETHUSDSwapSection />
          {/* <Link to="/" className="btn">Swap</Link> */}
        </div>
        <div class="col-lg-8">
          <ETHUSDChart />
        </div>
      </div>
    </div>
  );
};

export default LaunchApp;
