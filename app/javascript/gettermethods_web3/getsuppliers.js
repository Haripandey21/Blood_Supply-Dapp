import { contractConnection, bloodSupplyContract } from "../web3/contract_connection";
import { getAccounts } from "../web3/metamask_connection";

async function getSuppliersFunc() {
    await contractConnection();
    let accounts = await getAccounts();
  let suppliers= await bloodSupplyContract.methods.getDataOfSuppliers().call({ from: accounts[0] });
   console.log("suppliers", suppliers[0].supplier_address)

//    await fetch('http://127.0.0.1:3000/pages', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ suppliers: suppliers })
// });
   
}
getSuppliersFunc();


