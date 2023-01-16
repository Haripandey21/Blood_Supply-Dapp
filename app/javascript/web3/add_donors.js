import { contractConnection, bloodSupplyContract } from "./contract_connection";
import { getAccounts } from "./metamask_connection";

async function addDonorsFunc(_donor_name, _age, _gender, _Address, _blood_group, _blood_volume) {
    await contractConnection();
    let accounts = await getAccounts();
    await bloodSupplyContract.methods.addBlood(_donor_name, _age, _gender, _Address, _blood_group, _blood_volume).send({ from: accounts[0] });

}
export { addDonorsFunc }

