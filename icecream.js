
// cups only have toppings (hide or show the topping section when radio buttons are clicked)
// validation attributes: 1 to 4 scoops

window.onload = function(){}

const buttonEl = document.getElementById('submitOrder');
buttonEl.onclick = onbuttonClick;

function onbuttonClick(){
    const numScoopInput = +document.getElementById("numScoops").value;

    let baseScoop = 2.25;
    if (numScoopInput == '1'){
        baseScoop = 2.25;
    }
     else if (numScoopInput == '2'){
        baseScoop += 1.25;
    }
     else if (numScoopInput == '3'){
        baseScoop += (1.25 * 2);
    }
     else if (numScoopInput == '4'){
        baseScoop += (1.25 * 3);
    }
    const totalBasePrice = baseScoop

    let toppingBasePrice = 0
    if (document.getElementById('sprinkles').checked){
        toppingBasePrice += .50
    }
    if (document.getElementById('whippedCream').checked){
        toppingBasePrice += .25
    }
    if (document.getElementById('hotFudge').checked){
        toppingBasePrice += 1.25
    }
    if (document.getElementById('cherry').checked){
        toppingBasePrice += .25
    }

    let tax = 7/100
    let taxTotal= (toppingBasePrice+totalBasePrice) *tax
    let totalPriceDue = taxTotal + toppingBasePrice + totalBasePrice
    
    document.getElementById('toppingTotal').innerHTML=toppingBasePrice.toFixed(2);
    document.getElementById('baseScoop').innerHTML = totalBasePrice.toFixed(2);
    document.getElementById('tax').innerHTML= taxTotal.toFixed(2)
    document.getElementById('totalPrice').innerHTML= totalPriceDue.toFixed(2)
}

function onCupChange(){
    const toppingTable = document.getElementById('toppings');
    if (document.getElementById('cup').checked){
        toppingTable.style.display = 'block'
    } else {
        toppingTable.style.display = 'hidden'
    }
}