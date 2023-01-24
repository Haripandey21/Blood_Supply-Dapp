import { contractConnection, bloodSupplyContract } from "../web3/contract_connection";
import { getAccounts } from "../web3/metamask_connection";
const csrfToken = document.querySelector('meta[name="csrf-token"]').content;
async function getHospitalsFunc() {
    await contractConnection();
    let accounts = await getAccounts();
  let hospitals= await bloodSupplyContract.methods.getDataOfHospitals().call({ from: accounts[0] });
  console.log("hosp",hospitals[0]);
   // Make a POST request to a Rails endpoint
   const response = await fetch('/hospitals', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken
    },
    body: JSON.stringify({ hospitals: hospitals })
});
// Handle the response from the server
if (response.ok) {
    console.log('Hospitals data successfully sent to Rails controller!');
} else {
    console.error('An error occurred while sending Hospitals data to Rails controller.');
}

}

getHospitalsFunc(); 

