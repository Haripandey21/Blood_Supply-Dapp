import {
  contractConnection,
  bloodSupplyContract,
} from "../web3/contract_connection";
import { getAccounts } from "../web3/metamask_connection";

document.addEventListener("DOMContentLoaded", async function () {
  document.addEventListener("click", (event) => {
    if (event.target.id === "patients-link") {
      async function getDataOfPatientsFunc() {
        try {
          await contractConnection();
          const accounts = await getAccounts();
          let patients = await bloodSupplyContract.methods
            .getDataOfPatients()
            .call({ from: accounts[0] });

          appendDataToTable(patients);
        } catch (error) {
          console.error(error);
        }
      }
      async function appendDataToTable(patients) {
        const tableBody = document.querySelector("tbody");
        patients.forEach((patient) => {
          const date = new Date(patient[5] * 1000);
          const dateString = date.toLocaleString();
          const row = `<tr class="align-middle text-center">
                <td>${patient[0]}</td>
                <td>${patient[1]}</td>          
                <td>${patient[2]}</td>  
                <td>${patient[4]}</td>
                <td>${patient[3]}</td>           
                <td>${dateString}</td>            
              </tr>`;
          tableBody.insertAdjacentHTML("beforeend", row);
        });
      }
      getDataOfPatientsFunc();
    }
  });
});
