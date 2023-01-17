import {contractConnection,bloodSupplyContract} from "./contract_connection"
import { getAccounts } from "./metamask_connection"

async function getSuppliersData() {
    await contractConnection();
    let accounts= await getAccounts();
    await bloodSupplyContract.methods.getDataOFSuppliers().call({ from: accounts[0]});

}  
export {getSuppliersData}

