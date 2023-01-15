import {addSupplierFunc} from "../web3/add_supplier"

document.addEventListener("DOMContentLoaded", async function() {

    document.getElementById("addSupplierBtn").addEventListener("click", (event) => {
        event.preventDefault();
        const address = String(document.getElementById("form_supplier_address").value);
        const name = String(document.getElementById("form_supplier_name").value);
        const phone_number = document.getElementById("form_phone_number").value;
        
        addSupplierFunc(address, name, phone_number);
    });
    
});
