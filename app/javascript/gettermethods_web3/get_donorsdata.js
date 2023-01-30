import {
  contractConnection,
  bloodSupplyContract,
} from "../web3/contract_connection";
import { getAccounts } from "../web3/metamask_connection";

document.addEventListener("DOMContentLoaded", async function () {
  document.addEventListener("click", (event) => {
    if (event.target.id === "donors-link") {
      async function getDataOfDonorsFunc() {
        try {
          await contractConnection();
          const accounts = await getAccounts();
          let donors = await bloodSupplyContract.methods
            .getDataOfDonors()
            .call({ from: accounts[0] });
          console.log("donors dataa ", donors);
          console.log("donors dataay", donors[0][2]);
         
          appendDataToTable(donors);
          
        } catch (error) {
          console.error(error);
        }
      }
      async function appendDataToTable(donors) {
        const tableBody = document.querySelector("tbody");
        donors.forEach((donor) => {
          const row = `<tr class="align-middle text-center">
                <td>${donor[0]}</td>
                <td>${donor[1]}</td>          
                <td>${donor[2]}</td>  
                <td>${donor[3]}</td>
                <td>${donor[4]}</td>          
                <td>${donor[5]}</td>  
                <td>${donor[6]}</td>
                <td>${donor[7]}</td>          
              </tr>`;
          tableBody.insertAdjacentHTML("beforeend", row);
        });
      }
  
      getDataOfDonorsFunc();
    }
  });
});
