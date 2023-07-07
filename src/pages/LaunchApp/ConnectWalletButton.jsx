import React, { useState } from 'react';

const ConnectWalletButton = () => {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = async () => {
    try {
      if(window.ethereum){
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        setIsConnected(true);
      }
      else{
        window.open('https://metamask.io', '_blank');
      }
    } catch (error) {
        console.log(error);
    }
  };

  const handleDisconnect = async () => {
    try {
      setIsConnected(false);
      await window.ethereum.request({ method: 'eth_logout' });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {isConnected ? (
        <button className="btn" onClick={handleDisconnect}>Disconnect</button>
      ) : (
        <button className="btn" onClick={handleConnect}>Connect</button>
      )}
    </div>
  );
};

export default ConnectWalletButton;