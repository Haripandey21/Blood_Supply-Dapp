
- Deployed Contract Address : 0x01FcD3B808a2413Bf7E5d746621E17CaC21DD258  
- For etherscan visit here : https://goerli.etherscan.io/address/0x01FcD3B808a2413Bf7E5d746621E17CaC21DD258

- Smart Contract Link : https://github.com/Haripandey21/Solidity_contracts/tree/main/Blood_SupplyChain_Management_System

- Demo Video : https://www.youtube.com/watch?v=auTkLfloUbw


<p align="center">
  <a href="https://www.youtube.com/watch?v=auTkLfloUbw">
    <img src="https://github.com/Haripandey21/Solidity_contracts/blob/main/Blood_SupplyChain_Management_System/images/1675228045504.png" alt="YouTube Video">
  </a>
</p>


To run the Project : 
- clone it 
- install all dependencies by running `bundle install` in terminal 
- migrate the models by `rails db:migrate`
- and start server by `rails s`


## Features 
```bash 
- Enhance Donor Trust by Allowing Them to Track the Status of Their Donated Blood.

- Foster Safe Blood Donation through Verification of Trusted and Authorized Suppliers.

- Ensure Real-Time Availability of Blood Bags for Hospitals.

- Guarantee Data Privacy for Donors and Patients with Restricted Access for Admin Only.

- Streamline Blood Donation Processes and Enhance Efficiency through this System.

- Prevent Life-Threatening Mistakes with Alerts for Inconsistencies in Blood Group Matches.

- Promote Data Transparency and Accountability with a Secure, Blockchain-Based Record Keeping 
  System.
```

## Why Blockchain ? 
```bash
- Ensure Data Transparency through Open and Accessible Record Keeping in Blockchain 

- Maintain the Privacy of Donors and Patients with Controlled Access and Confidentiality Measures.

- Decrease Carelessness from Suppliers and Hospitals through Robust Monitoring and Verification.

- Ensure Data Immutability for Unalterable Records and Secure Evidence of Blood Donation Claims.
```


## Description of some function from the contract :-

- addSupplier: Allows the owner of the contract to add a new supplier to the system. The function takes an address and the name of the organization as inputs. It stores the supplier's address and organization name, and adds the address to the list of suppliers.

- addHospital: Allows the owner of the contract to add a new hospital to the system. The function takes an address and the name of the hospital as inputs. It stores the hospital's address and name, and adds the address to the list of hospitals.

- addDonor: Allows a supplier to add a new blood donor to the system. The function takes the donor's name, age, gender, address, blood group, and blood volume as inputs. It stores the donor's information and adds the blood to the system with a unique ID.

- shipBlood: Allows a supplier to ship blood from their organization to a hospital. The function takes the blood's unique ID and the address of the hospital as inputs. It updates the blood's status to "shipped" and records the shipping time.

- useBloodByPatient: Allows a hospital to use blood for a patient. The function takes the blood's unique ID and the patient's    information as inputs. It updates the blood's status to "fulfilled" and records the time the blood was used.

- getDonor: Returns the information of a blood donor given the donor's unique ID.

- getBlood: Returns the information of a blood unit given the blood's unique ID.

- getSupplier: Returns the information of a supplier given the supplier's unique ID.

- getHospital: Returns the information of a hospital given the hospital's unique ID.

- getPatient: Returns the information of a patient given the patient's unique ID.

