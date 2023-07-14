import React, { useEffect, useState, useContext } from "react";
import { StatusContext } from "../../contexts/Status.context";
import Web3 from "web3";
import UniswapV2Router02ABI from "../../constants/abi/UniswapRouter.json";
import bigInt from "big-integer";

const TokenAssets = () => {
  const { wallet } = useContext(StatusContext);
  const [ethBalance, setEthBalance] = useState(0);
  const [usdtBalance, setUSDTBalance] = useState(0);
  const [ethPrice, setEthPrice] = useState(null);
  const [AllPrice, setAllPrice] = useState(null);

  useEffect(() => {
    if (wallet !== "") {
      getBalance();
      // fetchEthPrice();
      getEthPrice();
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
      const balanceInUSDT = bigInt(balanceInWeiUSDT) / bigInt(1000000);
      console.log(`Goerli USDT balance: ${balanceInUSDT}`);
      setEthBalance(balanceInEth);
      setUSDTBalance(balanceInUSDT);
    } catch (error) {}
  };

  const fetchEthPrice = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd"
      );
      const data = await response.json();
      setEthPrice(data.ethereum.usd);
    } catch (error) {
      console.error(error);
    }
  };

  const getEthPrice = async () => {
    const web3 = new Web3(window.ethereum);

    const wethAddress = "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6";
    const tokenAddress = "0xC2C527C0CACF457746Bd31B2a698Fe89de2b6d49";

    const uniswapRouterAddress = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
    const uniswapRouterABI = UniswapV2Router02ABI;
    const uniswapRouterContract = new web3.eth.Contract(
      uniswapRouterABI,
      uniswapRouterAddress
    );

    const amounts = await uniswapRouterContract.methods
      .getAmountsOut(web3.utils.toWei(ethBalance, "ether"), [
        wethAddress,
        tokenAddress,
      ])
      .call();

    const price = bigInt(amounts[1]) / bigInt(1e6);
    setAllPrice(price);
  };

  return (
    <div className="row justify-content-center">
      {wallet === "" ? (
        <div className="text-center">
          <span style={{ color: "rgb(39, 220, 139)" }}>
            Connect your wallet
          </span>
        </div>
      ) : (
        <div className="col-xl-8">
          <div className="section-title text-center mb-50">
            <h2 className="title">My Assets</h2>
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
              <span>${AllPrice}</span>
            </div>
            <div class="col-4">
              <span>USDT</span>
            </div>
            <div class="col-4">
              <span>{usdtBalance}</span>
            </div>
            <div class="col-4">
              <span>${usdtBalance}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TokenAssets;
