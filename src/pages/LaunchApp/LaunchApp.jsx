import React from 'react';
import PageLoader from "../../components/PageLoader/PageLoader";
import HeaderLaunchPage from "../../components/Header/HeaderLaunchPage";
import ETHUSDChart from './ETHUSDChart';
import ETHUSDSwapSection from './ETHUSDSwap';

const LaunchApp = () => {
   return (
    <div>
      <PageLoader />
      <HeaderLaunchPage />
      <div class="row align-items-center bd-approach-wrap">
        <div class="col-lg-4">
          <ETHUSDSwapSection />
        </div>
        <div class="col-lg-8">
          <ETHUSDChart />
        </div>
      </div>
    </div>
  );
};

export default LaunchApp;
