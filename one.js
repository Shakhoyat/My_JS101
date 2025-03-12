//checkbox &radiobutton
const mycheckbox = document.getElementById('toggle');
const visabtn = document.getElementById('visabtn');
const paypalbtn = document.getElementById('paypalbtn');
const masterbtn = document.getElementById('masterbtn');
const mysub = document.getElementById('mysub');
const subres = document.getElementById('subres');
const paymentres = document.getElementById('paymentres');


mysub.onclick = function () {
    if (mycheckbox.checked) {
        subres.textContent = `You're Subscribed`;
    } else {
        subres.innerHTML = `You're not Subscribed`;
    }

    if(visabtn.checked){
        paymentres.textContent = `You've selected Visa`;}
    else if(paypalbtn.checked){
        paymentres.textContent = `You've selected Paypal`;}
    else if(masterbtn.checked){
        paymentres.textContent = `You've selected Mastercard`;}
    else{
    paymentres.textContent = `You've not selected any payment method`;}
}
