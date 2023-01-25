import Web3 from "web3";

let accounts;

document.addEventListener("DOMContentLoaded", async function () {
  if (typeof window.ethereum !== "undefined") {
    accounts = await ethereum.request({ method: "eth_requestAccounts" });
    let message = `Your want to Login in this website via account ${accounts[0]}`;
    if (await checkSignature(message)) {
      login();
    }
  } else {
    alert("Please install metamask");
  }
});

const checkSignature = async (message) => {
  if (localStorage.hasOwnProperty("signature")) {
    return true;
  } else {
    let web3 = new Web3(await Web3.givenProvider);
    await web3.eth.personal.sign(message, accounts[0]);
    localStorage.setItem("signature", "true");
    return true;
  }
};

const login = () => {
  if (typeof accounts != "undefined" && accounts.length) {
    $("#connectId").html(accounts[0]);
  }
};

async function getAccounts() {
  accounts = await ethereum.request({ method: "eth_requestAccounts" });
  return accounts;
}

export { accounts, getAccounts };
