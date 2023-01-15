import { addHospitalFunc } from "../web3/add_hospital";

document.addEventListener("DOMContentLoaded", async function() {

    document.getElementById("addHospitalBtn").addEventListener("click", (event) => {
        event.preventDefault();
        const address = String(document.getElementById("form_hospital_address").value);
        const name = String(document.getElementById("form_hospital_name").value);
        const phone_number = document.getElementById("form_phone_number").value;
        
        addHospitalFunc(address, name, phone_number);
    });
    
});
 