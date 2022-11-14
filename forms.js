const cardRadio = document.querySelector("#cardRadio")
const cardDetailElem = document.getElementById("cardDetails")
cardRadio.addEventListener('click', cardOr);
const invoce = document.querySelector("#invoice")
invoce.addEventListener('click', orInvoice);

function cardOr() {
    if (true) {
        console.log('kort'); 
        document.getElementById("cardDetails").style.display = "flex";
        document.getElementById("cardDetails").style.flexDirection = "column";
    }else{
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