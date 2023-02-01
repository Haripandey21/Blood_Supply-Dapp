import ABI from "../abi/blood_supply.json" assert { type: "json" };
import Web3 from "web3";
let bloodSupplyContract;
async function contractConnection() {
  let web3 = new Web3(await Web3.givenProvider);
  bloodSupplyContract = new web3.eth.Contract(
    ABI,
    "0xBD1d4E0a15C711751A1f99E513288095aBF76855"
  );
}
export { contractConnection, bloodSupplyContract };
