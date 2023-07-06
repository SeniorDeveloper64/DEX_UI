import React from 'react';
import './ETHUSDSwapWidget.css';

const ETHUSDSwapWidget = () => {
  return (
    <div className="ETHUSDSwapWidgetContainer">
      <iframe
        title="Uniswap ETH-USD Swap Widget"
        src="https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=USD"
        className="ETHUSDSwapWidget"
      />
    </div>
  );
};

export default ETHUSDSwapWidget;