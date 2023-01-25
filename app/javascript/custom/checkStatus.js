 import {getBloodStatusFunc} from "../web3/check_status";
document.addEventListener("DOMContentLoaded", async function() {
    const checkStatusBtn =document.getElementById("checkStatusBtn");
    if(checkStatusBtn){
    checkStatusBtn.addEventListener("click", (event) => {
        event.preventDefault();
        const blood_id = document.getElementById("form_blood_id").value;        
        getBloodStatusFunc(blood_id);
    });
}
});
  