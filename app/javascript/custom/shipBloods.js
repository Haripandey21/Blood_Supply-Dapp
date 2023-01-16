import {shipBloodFunc} from "../web3/ship_bloods";


document.addEventListener("DOMContentLoaded", async function() {

    document.getElementById("shipBloodBtn").addEventListener("click", (event) => {
        event.preventDefault();
        const blood_id = document.getElementById("form_blood_id").value;
        const address = String(document.getElementById("form_address").value);
        
        shipBloodFunc(blood_id,address);
    });
    
});
 