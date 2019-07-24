const Web3 = require('aion-web3')
const web3 = new Web3(
    new Web3.providers.HttpProvider("https://aion.api.nodesmith.io/v1/mastery/jsonrpc?apiKey=ae8d2a52c4994dd7bbbc06ac62b398d2")
    );
const $ = require("jquery");

window.onload = async () => {
    $('#grantAccess').on('click', async () => {
        try {
          const accountAddress = await window.aiwa.enable();  // grants access. Best practice to do it in a button. 
          console.log("wallets ", accountAddress)
          document.getElementById("grantsAccess").innerHTML = 'account address: ' + JSON.stringify(accountAddress);
        } catch(err){
          document.getElementById("grantsAccess").innerHTML = err.message;
        }
    });

    $('#fetchAddress').on('click', async () => {
        try {
          const accountAddress = await window.aionweb3.eth.accounts;  // grants access. Best practice to do it in a button. 
          console.log("wallets ", accountAddress)
          document.getElementById("addressAccess").innerHTML = 'account address: ' + JSON.stringify(accountAddress);
        } catch(err){
          document.getElementById("addressAccess").innerHTML = err.message;
        }
    });
}

