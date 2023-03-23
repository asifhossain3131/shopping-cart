function getPin(){
    const pin=random();
    const pinString=pin+"";
    if(pinString.length==4){
        return pin
    }
    else{
        return getPin();
    }
}

function random(){
  const randomNumber=  Math.round(Math.random()*10000)
  return randomNumber
}

document.getElementById('btn-generate-code').addEventListener('click', function(){
    const pinField=document.getElementById('pin-field');
  pinField.value=getPin()
})

document.getElementById('calculator').addEventListener('click', function(event){
 const number= event.target.innerText;
   const typedField=document.getElementById('typed-numbers');
    const previousTypedNumber=typedField.value;
 if(isNaN(number)){
 if(number=='C'){
typedField.value='';
 }
 else if(number=='<'){
  const digits=previousTypedNumber.split('')
  digits.pop()
  const remainingDigits=digits.join('')
  typedField.value=remainingDigits;
 }
 }
 else{

 
  const newTypedNumber=previousTypedNumber+number;
  typedField.value=newTypedNumber;
 }
})

document.getElementById('btn-verified').addEventListener('click', function(){
  const pinField=document.getElementById('pin-field')
  const pin=pinField.value;

  const typedNumberField=document.getElementById('typed-numbers');
  const typedNumbers=typedNumberField.value;

  const sucess=document.getElementById('success');
  const failure=document.getElementById('failure');
  if(typedNumbers==''){
 alert("Please provide valid pin numbers")
 pinField.value=''
  }
  else if(pin==typedNumbers){
    sucess.style.display='block'
    failure.style.display='none'
    window.location.href='mainPage.html'
  }
  else{
    failure.style.display='block'
    sucess.style.display='none'
    pinField.value=''
  }
})