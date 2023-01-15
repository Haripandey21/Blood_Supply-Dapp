import { contractConnection, bloodSupplyContract } from "./contract_connection";
import { accounts, getAccounts } from "./metamask_connection";

async function addHospitalFunc(_address, _name, _phone_number) {
    await contractConnection();
    let accounts = getAccounts();
    await bloodSupplyContract.methods.addHospital(_address, _name, _phone_number).send({ from: accounts[0] });

}
export { addHospitalFunc }

