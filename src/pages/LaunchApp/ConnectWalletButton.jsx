import React, { useContext, useState } from "react";
import Web3 from "web3";
import bigInt from "big-integer";
import { StatusContext } from "../../contexts/Status.context";

const ConnectWalletButton = () => {
  const { wallet, setWallet } = useContext(StatusContext);
  console.log({ wallet });
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        setIsConnected(true);
      } else {
        window.open("https://metamask.io", "_blank");
      }
    } catch (error) {
      console.log(error);
    }

    if (typeof window.ethereum !== "undefined") {
      // Web3 is available, so you can use it to get the balance
      const web3 = new Web3(window.ethereum);
      const account = await web3.eth.getAccounts();
      setWallet(account[0]);
      const balanceInWei = await web3.eth.getBalance(account[0]);
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
        .balanceOf(account[0])
        .call();
      // const balanceInUSDT = balanceInWeiUSDT / Math.pow(10, 6);
      const balanceInUSDT = bigInt(balanceInWeiUSDT) / bigInt(10 ** 6);
      console.log(`Goerli USDT balance: ${balanceInUSDT}`);
    } else {
      // Web3 is not available, so you cannot get the balance
      console.log("Web3 is not available");
    }
  };

  const handleDisconnect = async () => {
    try {
      setIsConnected(false);
      setWallet("");
      await window.ethereum.request({ method: "eth_logout" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {isConnected ? (
        <button className="btn" onClick={handleDisconnect}>
          Disconnect
        </button>
      ) : (
        <button className="btn" onClick={handleConnect}>
          Connect
        </button>
      )}
    </div>
  );
};

export default ConnectWalletButton;
