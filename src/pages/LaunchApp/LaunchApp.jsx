import React from 'react';
import PageLoader from "../../components/PageLoader/PageLoader";
import HeaderOne from "../../components/Header/HeaderOne";
import ETHUSDChart from './ETHUSDChart';
import ETHUSDSwapWidget from './ETHUSDSwap';


const LaunchApp = () => {
   return (
    <div>
      <PageLoader />
      {/* <HeaderOne /> */}
      <div class="row align-items-center">
        <div class="col-lg-4">
          {/* <ETHUSDSwapWidget /> */}
        </div>
        <div class="col-lg-8">
          <ETHUSDChart />
        </div>
      </div>
    </div>
  );
};

export default LaunchApp;
