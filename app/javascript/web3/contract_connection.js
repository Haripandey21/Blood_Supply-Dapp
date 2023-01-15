import ABI from "../abi/blood_supply.json" assert { type: "json" }
import Web3 from 'web3'; 
let bloodSupplyContract;
async function contractConnection() {
    let web3= new Web3(await Web3.givenProvider);
     bloodSupplyContract = new web3.eth.Contract(
        ABI,
        "0xE3681ae0a73aeAdf77B3B76f1Ce52799382EC239"
    );
}
 export {contractConnection,bloodSupplyContract}