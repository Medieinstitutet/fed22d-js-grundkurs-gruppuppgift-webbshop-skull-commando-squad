const cardRadio = document.querySelector("#cardRadio")
cardRadio.addEventListener('click', cardOr);
const invoce = document.querySelector("#invoice")
invoce.addEventListener('click', orInvoice);

function cardOr() {
    if (true) {
        console.log('kort'); 
        document.getElementById("cardDetails").style.display = "flex";
        document.getElementById("cardDetails").style.flexDirection = "column";
    }if(false){
        console.log('faktura'); 
        document.getElementById("cardDetails").style.display = "none";
        document.getElementById("cardDetails").style.flexDirection = "column";
    }


}

function orInvoice() {
    if (true) {
        console.log('faktura'); 
        document.getElementById("cardDetails").style.display = "none";
        document.getElementById("cardDetails").style.flexDirection = "column";
    }
}


const usageChecked = document.querySelector('#usage');
const submitBtn = document.querySelector('submit');
usageChecked.addEventListener('click', checkChecked);

function checkChecked(){
    if (true) {
        console.log('hej')
        document.getElementById("submitBtn").disabled = false;
    }
}