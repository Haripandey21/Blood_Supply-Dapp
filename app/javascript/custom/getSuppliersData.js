import { getSuppliersData } from "../web3/get_suppliers";

document.addEventListener("DOMContentLoaded", async function() {

    document.getElementById("addSupplierBtn").addEventListener("click", (event) => {
        event.preventDefault();
        getSuppliersData()
    });

});
