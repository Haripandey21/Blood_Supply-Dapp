import { contractConnection, bloodSupplyContract } from "../web3/contract_connection";
import { getAccounts } from "../web3/metamask_connection";
const csrfToken = document.querySelector('meta[name="csrf-token"]').content;
async function getSuppliersFunc() {
    await contractConnection();
    let accounts = await getAccounts();
  let suppliers= await bloodSupplyContract.methods.getDataOfSuppliers().call({ from: accounts[0] });
   console.log("Suppliers datas :",suppliers[0]);  

   // Make a POST request to a Rails endpoint
   const response = await fetch('/suppliers', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken
    },
    body: JSON.stringify({ suppliers: suppliers })
});

// Handle the response from the server
if (response.ok) {
    console.log('Supplier data successfully sent to Rails controller!');
} else {
    console.error('An error occurred while sending supplier data to Rails controller.');
}

}

getSuppliersFunc();