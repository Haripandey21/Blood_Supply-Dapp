import { contractConnection, bloodSupplyContract } from "./contract_connection";
import { getAccounts } from "./metamask_connection";

async function addHospitalFunc(_address, _name, _phone_number) {
    await contractConnection();
    let accounts = await getAccounts();
    await bloodSupplyContract.methods.addHospital(_address, _name, _phone_number).send({ from: accounts[0] });

}
export { addHospitalFunc }

