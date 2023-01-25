import { addDonorsFunc } from "../web3/add_donors";

document.addEventListener("DOMContentLoaded", async function () {
  const addDonorBtn = document.getElementById("addDonorBtn");
  if (addDonorBtn) {
    addDonorBtn.addEventListener("click", async function (event) {
      event.preventDefault();
      const name = String(document.getElementById("form_name").value);
      const age = document.getElementById("form_age").value;
      const gender = String(document.getElementById("form_gender").value);
      const address = String(document.getElementById("form_address").value);
      const blood_group = String(
        document.getElementById("form_blood_group").value
      );
      const blood_volume = document.getElementById("form_blood_volume").value;
      const eventDonorAdded = await addDonorsFunc(
        name,
        age,
        gender,
        address,
        blood_group,
        blood_volume
      );
      if (eventDonorAdded) {
        alert("You successfully added the Donor");
        window.location.href = "/adddonors";
      }
    });
  }
});
