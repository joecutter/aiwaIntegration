const Web3 = require('aion-web3');
const $ = require("jquery");

window.onload = async () => {
    $('#grantAccess').on('click', async () => {
        try {
          const accountAddress = await window.aiwa.enable();  // grants access. Best practice to do it in a button.
          document.getElementById("grantsAccess").innerHTML = 'account address: ' + JSON.stringify(accountAddress);
        } catch(err){
          document.getElementById("grantsAccess").innerHTML = err.message;
        }
    });

    $('#fetchAddress').on('click', async () => {
        try {
          const address = await window.aionweb3.eth.accounts; 
          console.log("wallets ", address)
          document.getElementById("addressAccess").innerHTML = 'account address: ' + JSON.stringify(address);
        } catch(err){
          document.getElementById("addressAccess").innerHTML = err.message;
        }
    });
}

