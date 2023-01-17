import { contractConnection, bloodSupplyContract } from "./contract_connection";
import { getAccounts } from "./metamask_connection";

async function getBloodStatusFunc(_bloodId) {
    await contractConnection();
    let accounts = await getAccounts();
    let  status = await bloodSupplyContract.methods.getBloodStatus(_bloodId).call({ from: accounts[0] });
    message=  await showmessage(status);
    alert(message);

}
export { getBloodStatusFunc }

  