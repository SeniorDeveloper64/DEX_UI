import React, { useState, useEffect } from "react";
import {
  ChainId,
  Token,
  WETH,
  Fetcher,
  Route,
  Trade,
  TokenAmount,
  TradeType,
  Percent,
} from "@uniswap/sdk";
import uniswaprouter from "../../constants/abi/UniswapRouter.json";

const ETH_USD_ADDRESS = "0x88df592f8eb5d7bd38bfef7deb0fbc02cf3778a0"; // Address of the ETH/USD Uniswap V2 pair on the Ethereum mainnet
const UNISWAP_ROUTER_ADDRESS = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D"; // Address of the Uniswap V2 Router on the Ethereum mainnet
const UNISWAP_ROUTER_ABI = uniswaprouter;
const WETH_ABI = [
  /* ... */
]; // ABI of the WETH contract

const ethToken = new Token(
  ChainId.MAINNET,
  "0x0000000000000000000000000000000000000000",
  18
);
const usdToken = new Token(ChainId.MAINNET, ETH_USD_ADDRESS, 6);

const ETHUSDSwapSection = ({ web3, account }) => {
  const [inputAmount, setInputAmount] = useState("");
  const [outputAmount, setOutputAmount] = useState("");
  const [selectedInput, setSelectedInput] = useState("eth");
  const [selectedOutput, setSelectedOutput] = useState("usdt");

  useEffect(() => {
    const fetchTokenPrices = async () => {
      try {
        const pair = await Fetcher.fetchPairData(ethToken, usdToken);
        const route = new Route([pair], ethToken);
        const trade = new Trade(
          route,
          new TokenAmount(ethToken, "1000000000000000000"),
          TradeType.EXACT_INPUT
        );

        setOutputAmount(trade.outputAmount.toSignificant(6));
      } catch (error) {
        console.log(error);
      }
    };

    fetchTokenPrices();
  }, []);

  const handleSwap = async () => {
    try {
      const router = new web3.eth.Contract(
        UNISWAP_ROUTER_ABI,
        UNISWAP_ROUTER_ADDRESS
      );
      const weth = new web3.eth.Contract(
        WETH_ABI,
        WETH[ChainId.MAINNET].address
      );
      const amountIn = web3.utils.toWei(inputAmount, "ether");
      const amountOutMin = new Percent("50", "10000"); // 0.50% slippage tolerance
      const deadline = Math.floor(Date.now() / 1000) + 60 * 20; // 20 minutes from the current Unix time

      const [path] = await Promise.all([
        Fetcher.fetchRoute(ethToken, usdToken),
      ]);

      const tx = await web3.eth.sendTransaction({
        from: account,
        to: UNISWAP_ROUTER_ADDRESS,
        value: amountIn,
        data: router.methods
          .swapExactETHForTokens(
            amountOutMin,
            path.map((token) => token.address),
            account,
            deadline
          )
          .encodeABI(),
        gasLimit: web3.utils.toHex(600000),
        gasPrice: web3.utils.toHex(web3.utils.toWei("10", "gwei")),
      });

      console.log(`Swap successful! Transaction hash: ${tx.transactionHash}`);
    } catch (error) {
      console.log(error);
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
                type="text"
                id="inputAmount"
                value={inputAmount}
                onChange={(e) => setInputAmount(e.target.value)}
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
              <input type="number" id="netFee" readOnly />
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
