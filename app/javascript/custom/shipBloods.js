import { shipBloodFunc } from "../web3/ship_bloods";

document.addEventListener("DOMContentLoaded", async function () {
  const shipBloodBtn = document.getElementById("shipBloodBtn");
  if (shipBloodBtn) {
    shipBloodBtn.addEventListener("click", async function (event) {
      event.preventDefault();
      const blood_id = document.getElementById("form_blood_id").value;
      const address = String(document.getElementById("form_address").value);
      const eventBloodShipped = await shipBloodFunc(blood_id, address);
      if (eventBloodShipped) {
        alert("You successfully Shipped the Blood to Hospital");
        window.location.href = "/shipbloods";
      }
    });
  }
});
