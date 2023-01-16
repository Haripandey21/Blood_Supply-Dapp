import { addPatientFunc } from "../web3/add_patient"

document.addEventListener("DOMContentLoaded", async function () {

    document.getElementById("addPatientBtn").addEventListener("click", (event) => {
        event.preventDefault();
        const blood_id = document.getElementById("form_blood_id").value;
        const patient_name = String(document.getElementById("form_patient_name").value);
        const age = document.getElementById("form_age").value;
        const address = String(document.getElementById("form_address").value);
        const blood_group = String(document.getElementById("form_blood_group").value);
        const donated_time = (new Date(document.getElementById("form_donated_time").value)).getTime() / 1000;
        addPatientFunc(blood_id,patient_name,age,address,blood_group,donated_time);
    });

});
