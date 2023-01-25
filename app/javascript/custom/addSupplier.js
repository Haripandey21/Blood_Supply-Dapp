import { addSupplierFunc } from "../web3/add_supplier"

document.addEventListener("DOMContentLoaded", async function () {
    const addSupplierBtn = document.getElementById("addSupplierBtn");
    if (addSupplierBtn) {
        addSupplierBtn.addEventListener("click",async function (event) {
            event.preventDefault();
            const address = String(document.getElementById("form_supplier_address").value);
            const name = String(document.getElementById("form_supplier_name").value);
            const phone_number = document.getElementById("form_phone_number").value;
            const eventSupplierAdded = await  addSupplierFunc(address, name, phone_number);
            if(eventSupplierAdded){  
                alert("You successfully added the Supplier");
                window.location.href = '/addsuppliers'; 
            } 
        });
    }

});
