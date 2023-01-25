import {
  contractConnection,
  bloodSupplyContract,
} from "../web3/contract_connection";
import { getAccounts } from "../web3/metamask_connection";
document.addEventListener("DOMContentLoaded", async function () {
  document.getElementById("donors-link").addEventListener("click", (event) => {
    console.log("clickedd button");
    event.preventDefault();
    async function getDataOfDonorsFunc() {
      await contractConnection();
      const accounts = await getAccounts();
      let donors = await bloodSupplyContract.methods
        .getDataOfDonors()
        .call({ from: accounts[0] });
        console.log("donors data ::",JSON.stringify(donors[0]));
         document.getElementById("donors-data").innerHTML = JSON.stringify(donors);
    }
    getDataOfDonorsFunc();
  });
});
