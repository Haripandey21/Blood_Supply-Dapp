import { addHospitalFunc } from "../web3/add_hospital";

document.addEventListener("DOMContentLoaded", async function () {
  const addHospitalBtn = document.getElementById("addHospitalBtn");
  if (addHospitalBtn) {
    addHospitalBtn.addEventListener("click", async function (event) {
      event.preventDefault();
      const address = String(
        document.getElementById("form_hospital_address").value
      );
      const name = String(document.getElementById("form_hospital_name").value);
      const phone_number = document.getElementById("form_phone_number").value;
      const eventHospitalAdded = await addHospitalFunc(
        address,
        name,
        phone_number
      );
      if (eventHospitalAdded) {
        alert("You successfully added the Hospital");
        window.location.href = "/addhospitals";
      }
    });
  }
});
