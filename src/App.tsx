import { ethers } from "ethers";
import { useState } from "react";

const apiKey = "S76FIC6T4YY73KFJK699WFCX5VRCYA3J7R";

const provider = ethers.getDefaultProvider();

const apiUrl = `https://api.etherscan.io/api?module=proxy&action=eth_blockNumber&apikey=${apiKey}`;
const address = "0xdac17f958d2ee523a2206206994597c13d831ec7";

function App() {
  const [block, setBlock] = useState(0);
  const [balance, setBalance] = useState(0);

  const handleSubmit_1 = async () => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        let latestBlock = parseInt(data["result"], 16);
        console.log("API Response:", latestBlock);
        setBlock(latestBlock);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleSubmit_2 = async () => {
    let balance = (await provider.getBalance(address)).toString();
    console.log(balance);
    setBalance(+balance);
  };

  return (
    <>
      <div>
        <button type="submit" onClick={handleSubmit_1}>
          Get Block
        </button>
        <div>
          <h2>{block}</h2>
        </div>
        <button type="submit" onClick={handleSubmit_2}>
          Get Balance
        </button>
        <div>
          <h2>{balance}</h2>
        </div>
      </div>
    </>
  );
}

export default App;
