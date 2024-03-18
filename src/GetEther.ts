import Web3 from "web3";

const web3 = new Web3('S76FIC6T4YY73KFJK699WFCX5VRCYA3J7R');

web3.eth.getBlockNumber()
     .then((blockNumber) => {
       console.log('Last block number:', blockNumber);
     })
     .catch((error) => {
       console.error('Error:', error);
     });