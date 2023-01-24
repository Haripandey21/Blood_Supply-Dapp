import { contractConnection, bloodSupplyContract } from "../web3/contract_connection";
import { getAccounts } from "../web3/metamask_connection";
const csrfToken = document.querySelector('meta[name="csrf-token"]').content;
async function getbloodDataFunc() {
    await contractConnection();
    let accounts = await getAccounts();
  let bloodData= await bloodSupplyContract.methods.getDataOfBlood().call({ from: accounts[0] });
   // Make a POST request to a Rails endpoint
   const response = await fetch('/datas', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken
    },
    body: JSON.stringify({ bloodData: bloodData })
});
// Handle the response from the server
if (response.ok) {
    console.log('bloodData data successfully sent to Rails controller!');
} else {
    console.error('An error occurred while sending bloodData data to Rails controller.');
}

}

getbloodDataFunc();