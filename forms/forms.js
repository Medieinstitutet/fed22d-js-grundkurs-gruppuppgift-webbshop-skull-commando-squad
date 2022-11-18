const cardRadio = document.querySelector("#cardRadio")
cardRadio.addEventListener('click', cardOr);
const invoiceRadio = document.querySelector("#invoiceRadio")
invoiceRadio.addEventListener('click', cardOr);

function cardOr() {
    if (cardRadio.checked) {
        console.log('kort'); 
        document.getElementById("cardDetails").style.display = "flex";
        document.getElementById("cardDetails").style.flexDirection = "column";
    }if(invoiceRadio.checked){
        console.log('faktura'); 
        document.getElementById("cardDetails").style.display = "none";
    }
}

const usageChecked = document.querySelector('#usage');
const submitBtn = document.querySelector('submit');
usageChecked.addEventListener('click', checkChecked);

function checkChecked(){
    if (true) {
        console.log('hej')
        document.getElementById("submitBtn").disabled = false;
    }}