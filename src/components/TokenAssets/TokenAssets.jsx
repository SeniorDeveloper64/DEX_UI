import React, { useEffect, useState, useContext } from "react";
import { StatusContext } from "../../contexts/Status.context";
import Web3, { eth } from "web3";
import bigInt from "big-integer";

const TokenAssets = () => {
  const { wallet } = useContext(StatusContext);
  const [ethBalance, setEthBalance] = useState(0);
  const [usdtBalance, setUSDTBalance] = useState(0);

  useEffect(() => {
    if (wallet != "") {
      getBalance();
    }
  }, [wallet]);

  const getBalance = async () => {
    try {
      const web3 = new Web3(window.ethereum);

      const balanceInWei = await web3.eth.getBalance(wallet);
      const balanceInEth = web3.utils.fromWei(balanceInWei, "ether");
      console.log(`Goerli ETH balance: ${balanceInEth}`);

      const usdtContractAddr = "0xC2C527C0CACF457746Bd31B2a698Fe89de2b6d49"; // Goerli USDT contract address
      const usdtContractAbi = [
        {
          constant: true,
          inputs: [{ name: "_owner", type: "address" }],
          name: "balanceOf",
          outputs: [{ name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
      ]; // USDT contract ABI
      const usdtContract = new web3.eth.Contract(
        usdtContractAbi,
        usdtContractAddr
      );
      const balanceInWeiUSDT = await usdtContract.methods
        .balanceOf(wallet)
        .call();
      // const balanceInUSDT = balanceInWeiUSDT / Math.pow(10, 6);
      const balanceInUSDT = bigInt(balanceInWeiUSDT) / bigInt(10 ** 6);
      console.log(`Goerli USDT balance: ${balanceInUSDT}`);
      setEthBalance(balanceInEth);
      setUSDTBalance(balanceInUSDT);
    } catch (error) {}
  };

  return (
    <div className="row justify-content-center">
      {wallet === "" ? (
        <span>Connect your wallet</span>
      ) : (
        <div className="col-xl-8">
          <div className="section-title text-center mb-50">
            <h2 className="title" style={{ color: "rgb(255, 255, 255)" }}>
              My Assets
            </h2>
          </div>
          <div className="row justify-content-center">
            <div class="col-4">
              <span>Asset</span>
            </div>
            <div class="col-4">
              <span>Balance</span>
            </div>
            <div class="col-4">
              <span>Value</span>
            </div>
            <div class="col-4">
              <span>ETH</span>
            </div>
            <div class="col-4">
              <span>{ethBalance}</span>
            </div>
            <div class="col-4">
              <span>$12132</span>
            </div>
            <div class="col-4">
              <span>USDT</span>
            </div>
            <div class="col-4">
              <span>{usdtBalance}</span>
            </div>
            <div class="col-4">
              <span>$123123</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TokenAssets;
