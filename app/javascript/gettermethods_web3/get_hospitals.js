import { contractConnection, bloodSupplyContract } from "../web3/contract_connection";
import { getAccounts } from "../web3/metamask_connection";

const csrfToken = document.querySelector('meta[name="csrf-token"]').content;

document.addEventListener("DOMContentLoaded", async function () {
    document.getElementById("hospital-link").addEventListener("click", (event) => {
        event.preventDefault();
        async function getHospitalsFunc() {
            await contractConnection();
            const accounts = await getAccounts();
            const hospitals = await bloodSupplyContract.methods.getDataOfHospitals().call({ from: accounts[0] });

            try {
                // Make a POST request to a Rails endpoint
                const response = await fetch('/hospitals', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-Token': csrfToken
                    },
                    body: JSON.stringify({ hospitals: hospitals })
                });
                // Handle the response from the server
                if (response.ok) {
                    console.log('Hospitals data successfully sent to Rails controller!');
                    window.location.href = '/hospitals';
                } else {
                    console.error('An error occurred while sending Hospitals data to Rails controller.');
                }
            } catch (error) {
                console.error(error);
            }
        }
        getHospitalsFunc();
    });

}); 