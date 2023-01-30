import {
    contractConnection,
    bloodSupplyContract,
  } from "../web3/contract_connection";
  import { getAccounts } from "../web3/metamask_connection";
  document.addEventListener("DOMContentLoaded", async function () {
    document.getElementById("patients-link").addEventListener("click", (event) => {
        console.log("clicked button");
      event.preventDefault();
      async function getDataOfPatientsFunc() {
        await contractConnection();
        const accounts = await getAccounts();
        let patients = await bloodSupplyContract.methods
          .getDataOfPatients()
          .call({ from: accounts[0] });
          console.log("patients data ::",JSON.stringify(patients[0]));
           document.getElementById("donors-data").innerHTML = JSON.stringify(patients);
      }
      getDataOfPatientsFunc();
    });
  });
  