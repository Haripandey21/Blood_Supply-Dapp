 import {getBloodStatusFunc} from "../web3/check_status";
document.addEventListener("DOMContentLoaded", async function() {

    document.getElementById("checkStatusBtn").addEventListener("click", (event) => {
        event.preventDefault();
        const blood_id = document.getElementById("form_blood_id").value;        
        getBloodStatusFunc(blood_id);
    });
    
});
  