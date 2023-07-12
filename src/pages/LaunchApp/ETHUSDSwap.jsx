import React, { useState, useEffect } from "react";
import Web3, { eth } from "web3";
import UniswapV2Router02ABI from "../../constants/abi/UniswapRouter.json";
import IERC20TokenABI from "../../constants/abi/IERC20ABI.json";
import WETHABI from "../../constants/abi/WethABI.json";
import bigInt from "big-integer";

const ETHUSDSwapSection = () => {
  const web3 = new Web3(window.ethereum);

  const [selectedInput, setSelectedInput] = useState("eth");
  const [selectedOutput, setSelectedOutput] = useState("usdt");
  const [inputAmount, setInputAmount] = useState("");
  const [outputAmount, setOutputAmount] = useState("");
  const [gasFee, setGasFee] = useState("");

  console.log(outputAmount);

  const [account, setAccount] = useState("");

  useEffect(() => {
    getAccount();
  }, []);

  useEffect(() => {
    handleOutputAmount(inputAmount);
  }, [inputAmount]);

  const getAccount = async () => {
    try {
      const accounts = await web3.eth.getAccounts();
      const account = accounts[0];
      setAccount(account);
    } catch (error) {}
  };

  const handleOutputAmount = async (inputAmount) => {
    if (inputAmount == 0) {
      setOutputAmount(0);
      setGasFee(0);
    } else {
      const uniswapRouterAddress = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
      const uniswapRouterABI = UniswapV2Router02ABI;

      const uniswapRouterContract = new web3.eth.Contract(
        uniswapRouterABI,
        uniswapRouterAddress
      );
      const wethAddress = "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6";
      const tokenAddress = "0xC2C527C0CACF457746Bd31B2a698Fe89de2b6d49"; // TODO: Replace with output token address

      const amounts = await uniswapRouterContract.methods
        .getAmountsOut(web3.utils.toWei(inputAmount, "ether"), [
          wethAddress,
          tokenAddress,
        ])
        .call();

      console.log(amounts);
      const outputAmount = bigInt(amounts[1]) / 1e6;
      setOutputAmount(outputAmount);

      const gasPrice = await web3.eth.getGasPrice();
      const gasFee = (bigInt(gasPrice) * bigInt(1000000)) / bigInt(1e18);
      setGasFee(gasFee);

      console.log(Date.now() + 1000 * 60 * 3);
    }
  };

  const handleInputChange = (e) => {
    setSelectedInput(e.target.value);
    setSelectedOutput(e.target.value === "eth" ? "usdt" : "eth");
  };

  const handleOutputChange = (e) => {
    setSelectedOutput(e.target.value);
    setSelectedInput(e.target.value === "eth" ? "usdt" : "eth");
  };

  const handleSwap = async () => {
    try {
      const uniswapRouterAddress = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
      const uniswapRouterABI = UniswapV2Router02ABI;

      const uniswapRouterContract = new web3.eth.Contract(
        uniswapRouterABI,
        uniswapRouterAddress
      );

      const wethAddress = "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6";
      const wethABI = WETHABI;
      const wethContract = new web3.eth.Contract(wethABI, wethAddress);

      const tokenAddress = "0xC2C527C0CACF457746Bd31B2a698Fe89de2b6d49"; // TODO: Replace with output token address
      const TokenABI = IERC20TokenABI;
      const TokenContract = new web3.eth.Contract(TokenABI, tokenAddress);

      const amounts = await uniswapRouterContract.methods
        .getAmountsOut(web3.utils.toWei(inputAmount, "ether"), [
          wethAddress,
          tokenAddress,
        ])
        .call();

      await wethContract.methods
        .deposit()
        .send({ from: account, value: amounts[0] });

      const inputAmountWei = amounts[0];

      console.log(amounts);
      const outputAmountWei = amounts[1];
      console.log(outputAmountWei);
      console.log("account");
      console.log(account);

      await TokenContract.methods
        .approve(uniswapRouterAddress, outputAmountWei)
        .send({ from: account });

      await uniswapRouterContract.methods
        .swapExactETHForTokens(
          outputAmountWei,
          [wethAddress, tokenAddress],
          account,
          Date.now() + 1000 * 60 * 3
        )
        .send({ from: account, value: inputAmountWei });

      // Unwrap WETH into ETH
      await wethContract.methods
        .withdraw(web3.utils.toWei(inputAmount, "ether"))
        .send({ from: account });

      // Update the output amount in the UI
      // setOutputAmount(outputAmount);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="contact-form-wrap-launch">
        <div className="row">
          <div className="col-md-2">
            <select value={selectedInput} onChange={handleInputChange}>
              <option value="eth">ETH</option>
              <option value="usdt">USDT</option>
            </select>
          </div>

          <div className="col-md-10">
            <div className="form-grp">
              <input
                type="number"
                min="0"
                id="inputAmount"
                value={inputAmount}
                onChange={(e) => setInputAmount(e.target.value)}
              />
            </div>
          </div>

          <div className="col-md-2">
            <select value={selectedOutput} onChange={handleOutputChange}>
              <option value="eth">ETH</option>
              <option value="usdt">USDT</option>
            </select>
          </div>
          <div className="col-md-10">
            <div className="form-grp">
              <input
                type="number"
                id="outputAmount"
                value={outputAmount}
                readOnly
              />
            </div>
          </div>

          <div className="col-md-2">
            <span>FEE: </span>
          </div>
          <div className="col-md-10">
            <div className="form-grp">
              <input type="number" id="gasFee" value={gasFee} readOnly />
            </div>
          </div>
        </div>

        <div className="submit-btn text-center">
          <button className="btn" onClick={handleSwap}>
            Swap
          </button>
        </div>
      </div>
    </div>
  );
};

export default ETHUSDSwapSection;
