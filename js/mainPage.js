let serialNo=0;
// coffee
document.getElementById('coffee-btn').addEventListener('click', function(){

    const productName=document.getElementById('coffee').innerText;
    let fieldNumber=document.getElementById("coffee-field").value;
    const perPrice=document.getElementById('coffee-price').innerText;
    const total=parseInt(perPrice)*parseInt(fieldNumber);

    if(total==0){
        return;
    }
    else{
        serialNo+=1
    }
   
 displayData(serialNo,productName, fieldNumber, perPrice, total)   
 
})

// heart
document.getElementById('heart-btn').addEventListener('click', function(){
   
    const productName=document.getElementById('heart').innerText;
    let fieldNumber=document.getElementById("heart-field").value;
    const perPrice=document.getElementById('heart-price').innerText;
    const total=parseInt(perPrice)*parseInt(fieldNumber);

    if(total==0){
        return;
    }
    else{
        serialNo+=1
    }
   
 displayData(serialNo,productName, fieldNumber, perPrice, total)   
})

// panda js
document.getElementById('panda-btn').addEventListener('click', function(){
    const productName=document.getElementById('panda').innerText;
    let fieldNumber=document.getElementById("panda-field").value;
    const perPrice=document.getElementById('panda-price').innerText;
    const total=parseInt(perPrice)*parseInt(fieldNumber);

    if(total==0){
        return;
    }
    else{
        serialNo+=1
    }
   
 displayData(serialNo,productName, fieldNumber, perPrice, total)   
})

// umbrealla js
document.getElementById('umbrella-btn').addEventListener('click', function(){
    const productName=document.getElementById('umbrella').innerText;
    let fieldNumber=document.getElementById("umbrella-field").value;
    const perPrice=document.getElementById('umbrella-price').innerText;
    const total=parseInt(perPrice)*parseInt(fieldNumber);

    if(total==0){
        return;
    }
    else{
        serialNo+=1
    }
   
 displayData(serialNo,productName, fieldNumber, perPrice, total)   
})

// vue js
document.getElementById('vue-btn').addEventListener('click', function(){
    const productName=document.getElementById('vue').innerText;
    let fieldNumber=document.getElementById("vue-field").value;
    const perPrice=document.getElementById('vue-price').innerText;
    const total=parseInt(perPrice)*parseInt(fieldNumber);

    if(total==0){
        return;
    }
    else{
        serialNo+=1
    }
   
 displayData(serialNo,productName, fieldNumber, perPrice, total)   
})

// unique js
document.getElementById('unique-btn').addEventListener('click', function(){
    const productName=document.getElementById('unique').innerText;
    let fieldNumber=document.getElementById("unique-field").value;
    const perPrice=document.getElementById('unique-price').innerText;
    const total=parseInt(perPrice)*parseInt(fieldNumber);

    if(total==0){
        return;
    }
    else{
        serialNo+=1
    }
   
 displayData(serialNo,productName, fieldNumber, perPrice, total)   
})
