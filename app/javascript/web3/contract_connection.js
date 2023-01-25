import ABI from "../abi/blood_supply.json" assert { type: "json" };
import Web3 from "web3";
let bloodSupplyContract;
async function contractConnection() {
  let web3 = new Web3(await Web3.givenProvider);
  bloodSupplyContract = new web3.eth.Contract(
    ABI,
    "0x53F493F9c88f3bd04DA6C6bddbf79b84E3bc9ECD"
  );
}
export { contractConnection, bloodSupplyContract };
