import React, { useState, useEffect } from "react";
import Web3, { eth } from "web3";
import UniswapV2Router02ABI from "../../constants/abi/UniswapRouter.json";
import OutputTokenABI from "../../constants/abi/IERC20ABI.json";
import WETHABI from "../../constants/abi/WethABI.json";
import bigInt from "big-integer";

const ETHUSDSwapSection = () => {
  const web3 = new Web3(window.ethereum);

  const [selectedInput, setSelectedInput] = useState("eth");
  const [selectedOutput, setSelectedOutput] = useState("usdt");
  const [outputToken, setOutputToken] = useState("");
  const [ethAmount, setEthAmount] = useState("");
  const [outputAmount, setOutputAmount] = useState("");
  const [gasFee, setGasFee] = useState("");

  console.log(outputAmount);

  const [account, setAccount] = useState("");

  useEffect(() => {
    getAccount();
  }, []);

  useEffect(() => {
    handleOutputAmount(ethAmount);
  }, [ethAmount]);

  const getAccount = async () => {
    try {
      const accounts = await web3.eth.getAccounts();
      const account = accounts[0];
      setAccount(account);
    } catch (error) {}
  };

  const handleOutputAmount = async (ethAmount) => {
    if (ethAmount == 0) {
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
      const outputTokenAddress = "0xC2C527C0CACF457746Bd31B2a698Fe89de2b6d49"; // TODO: Replace with output token address

      const amounts = await uniswapRouterContract.methods
        .getAmountsOut(web3.utils.toWei(ethAmount, "ether"), [
          wethAddress,
          outputTokenAddress,
        ])
        .call();

      const outputAmount = amounts[1];
      setOutputAmount(Number(outputAmount).toString());

      const gasPrice = await web3.eth.getGasPrice();
      const gasFee = (bigInt(gasPrice) * bigInt(10000000)) / bigInt(1e18);
      setGasFee(gasFee);
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

      const outputTokenAddress = "0xC2C527C0CACF457746Bd31B2a698Fe89de2b6d49"; // TODO: Replace with output token address
      const outputTokenABI = OutputTokenABI;
      const outputTokenContract = new web3.eth.Contract(
        outputTokenABI,
        outputTokenAddress
      );

      const amounts = await uniswapRouterContract.methods
        .getAmountsOut(web3.utils.toWei(ethAmount, "ether"), [
          wethAddress,
          outputTokenAddress,
        ])
        .call();

      await wethContract.methods
        .deposit()
        .send({ from: account, value: amounts[0] });

      const ethAmountWei = amounts[0];

      console.log(amounts);
      const outputAmountWei = amounts[1];
      console.log(outputAmountWei);
      console.log("account");
      console.log(account);

      await outputTokenContract.methods
        .approve(uniswapRouterAddress, outputAmountWei)
        .send({ from: account });

      await uniswapRouterContract.methods
        .swapExactETHForTokens(
          outputAmountWei,
          [wethAddress, outputTokenAddress],
          account,
          Date.now() + 1000 * 60 * 3
        )
        .send({ from: account, value: ethAmountWei });

      // Unwrap WETH into ETH
      await wethContract.methods
        .withdraw(web3.utils.toWei(ethAmount, "ether"))
        .send({ from: account });

      // Update the output amount in the UI
      setOutputAmount(outputAmount);
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
                id="ethAmount"
                value={ethAmount}
                onChange={(e) => setEthAmount(e.target.value)}
                inputMode="numeric"
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
