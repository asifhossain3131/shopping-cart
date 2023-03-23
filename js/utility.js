// plus -minus button
const cartBox= document.getElementById('cart-box-items')
const cartString=cartBox.innerText;
let cartNewItems=parseInt(cartString)
const totalItemsField=document.getElementById('cart-total-items')
function PlusMinus(id, isIncrease){
    const field= document.getElementById(id)
    const fieldString=field.value;
    const fieldNumber=parseInt(fieldString);
    let newNumber;
 if(isIncrease==true){
  newNumber=fieldNumber+1;
  cartNewItems+=1
 }
 else{
   newNumber=fieldNumber-1
   cartNewItems-=1
 }
 field.value=newNumber;
 cartBox.innerText=cartNewItems;
 totalItemsField.innerText=cartNewItems
 
}



function displayData(serialNo, productName ,fieldNumber,perPrice, total){
     
 const tableContainer=document.getElementById('table-container')
  const tr=document.createElement('tr');
  tr.innerHTML=`
  <td>${serialNo}</td>
  <td>${productName}</td>
  <td>${fieldNumber}</td>
  <td>${perPrice}</td>
  <td>${total}</td>
`
if(total==0){
  alert('Nothing to add')
  return;
}
else{
  tableContainer.appendChild(tr);
}
}



