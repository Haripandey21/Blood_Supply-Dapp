import { contractConnection, bloodSupplyContract } from "./contract_connection"
import { getAccounts } from "./metamask_connection"

async function addSupplierFunc(_address, _name, _phone_number) {
    await contractConnection();
    let accounts = await getAccounts();
    await bloodSupplyContract.methods.addSupplier(_address, _name, _phone_number).send({ from: accounts[0] });
    let event = await bloodSupplyContract.getPastEvents("eventSupplierAdded", {});
    return event;
}
export { addSupplierFunc }

