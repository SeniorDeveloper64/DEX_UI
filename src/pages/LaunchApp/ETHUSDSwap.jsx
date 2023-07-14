import React, { useState, useEffect } from "react";
import Web3, { eth } from "web3";
import UniswapV2Router02ABI from "../../constants/abi/UniswapRouter.json";
import IERC20TokenABI from "../../constants/abi/IERC20ABI.json";
import WETHABI from "../../constants/abi/WethABI.json";

const ETHUSDSwapSection = () => {
  const [selectedInput, setSelectedInput] = useState("eth");
  const [selectedOutput, setSelectedOutput] = useState("usdt");
  const [inputAmount, setInputAmount] = useState("");
  const [outputAmount, setOutputAmount] = useState("");
  const [gasFee, setGasFee] = useState("");
  const [account, setAccount] = useState("");

  const web3 = new Web3(window.ethereum);

  useEffect(() => {
    getAccount();
  }, []);

  useEffect(() => {
    handleOutputAmount(inputAmount);
  }, [inputAmount]);

  useEffect(() => {
    handleInputAmount(outputAmount);
  }, [outputAmount]);

  const getAccount = async () => {
    try {
      const accounts = await web3.eth.getAccounts();
      const account = accounts[0];
      setAccount(account);
    } catch (error) {}
  };

  const handleInputAmount = async (outputAmount) => {
    console.log("handleInputAmount");
  };

  const handleOutputAmount = async (inputAmount) => {
    if (inputAmount == 0) {
      setOutputAmount("");
      setGasFee("");
    } else {
      const uniswapRouterAddress = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
      const uniswapRouterABI = UniswapV2Router02ABI;
      const uniswapRouterContract = new web3.eth.Contract(
        uniswapRouterABI,
        uniswapRouterAddress
      );

      const wethAddress = "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6";
      const tokenAddress = "0xC2C527C0CACF457746Bd31B2a698Fe89de2b6d49";

      if (selectedInput == "eth") {
        const amounts = await uniswapRouterContract.methods
          .getAmountsOut(web3.utils.toWei(inputAmount, "ether"), [
            wethAddress,
            tokenAddress,
          ])
          .call();

        console.log(amounts);
        const outputAmount = Number(amounts[1]) / Number(1e6);
        setOutputAmount(outputAmount);
      } else {
        const amounts = await uniswapRouterContract.methods
          .getAmountsOut(
            Number(Number(Math.floor(inputAmount)) * 1e6).toString(),
            [tokenAddress, wethAddress]
          )
          .call();

        console.log(amounts);
        const outputAmount = Number(amounts[1]) / Number(1e18);
        setOutputAmount(outputAmount);
      }

      const gasPrice = await web3.eth.getGasPrice();
      const gasFee = (Number(gasPrice) * Number(1000000)) / Number(1e18);
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

      const tokenAddress = "0xC2C527C0CACF457746Bd31B2a698Fe89de2b6d49"; // TODO: Replace with output token address
      const TokenABI = IERC20TokenABI;
      const TokenContract = new web3.eth.Contract(TokenABI, tokenAddress);

      if (selectedInput == "eth") {
        const amounts = await uniswapRouterContract.methods
          .getAmountsOut(web3.utils.toWei(inputAmount, "ether"), [
            wethAddress,
            tokenAddress,
          ])
          .call();

        console.log(amounts);
        const inputAmountWei = amounts[0];
        const outputAmountWei = amounts[1];

        await wethContract.methods
          .deposit()
          .send({ from: account, value: amounts[0] });

        // await TokenContract.methods
        //   .approve(uniswapRouterAddress, outputAmountWei)
        //   .send({ from: account });

        await uniswapRouterContract.methods
          .swapExactETHForTokens(
            outputAmountWei,
            [wethAddress, tokenAddress],
            account,
            Date.now() + 1000 * 60 * 3
          )
          .send({ from: account, value: inputAmountWei });

        await wethContract.methods
          .withdraw(web3.utils.toWei(inputAmount, "ether"))
          .send({ from: account });
      } else {
        const amounts = await uniswapRouterContract.methods
          .getAmountsOut(
            Number(Number(Math.floor(inputAmount)) * 1e6).toString(),
            [tokenAddress, wethAddress]
          )
          .call();

        console.log(amounts);
        const inputAmountWei = amounts[0];
        const outputAmountWei = amounts[1];

        await TokenContract.methods
          .approve(uniswapRouterAddress, inputAmountWei)
          .send({ from: account });

        // await wethContract.methods
        //   .deposit()
        //   .send({ from: account, value: outputAmountWei });

        await uniswapRouterContract.methods
          .swapExactTokensForETH(
            inputAmountWei,
            outputAmountWei,
            [tokenAddress, wethAddress],
            account,
            Date.now() + 1000 * 60 * 3
          )
          .send({ from: account });

        await wethContract.methods
          .withdraw(web3.utils.toWei(outputAmount, "ether"))
          .send({ from: account });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="contact-form-wrap-launch">
        <div className="row">
          <div className="col-md-2" style={{ padding: 20 }}>
            <select
              value={selectedInput}
              style={{
                backgroundColor:
                  selectedInput === "eth" ? "#0b1d33" : "#1d2024",
                color: "white",
                borderRadius: "10px",
                border: "none",
              }}
              onChange={handleInputChange}
            >
              <option value="eth" style={{ backgroundColor: "blue" }}>
                ETH
              </option>
              <option value="usdt" style={{ backgroundColor: "grey" }}>
                USDT
              </option>
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

          <div className="col-md-2" style={{ padding: 20 }}>
            <select
              value={selectedOutput}
              style={{
                backgroundColor:
                  selectedOutput === "eth" ? "#0b1d33" : "#1d2024",
                color: "white",
                borderRadius: "10px",
                border: "none",
              }}
              onChange={handleOutputChange}
            >
              <option value="eth" style={{ backgroundColor: "blue" }}>
                ETH
              </option>
              <option value="usdt" style={{ backgroundColor: "grey" }}>
                USDT
              </option>
            </select>
          </div>
          <div className="col-md-10">
            <div className="form-grp">
              <input
                type="number"
                min="0"
                id="outputAmount"
                value={outputAmount}
                onChange={(e) => setOutputAmount(e.target.value)}
                readOnly
              />
            </div>
          </div>

          <div className="col-md-2" style={{ padding: 20 }}>
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
