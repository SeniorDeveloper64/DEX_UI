import React from 'react';
import PageLoader from "../../components/PageLoader/PageLoader";
import HeaderOne from "../../components/Header/HeaderOne";
import ETHUSDChart from './ETHUSDChart';


const LaunchApp = () => {
   return (
    <div>
      <PageLoader />
      {/* <HeaderOne /> */}
      <ETHUSDChart />
    </div>
  );
};

export default LaunchApp;
