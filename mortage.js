press=()=>{
  // collect input value
  let P1=parseFloat(document.getElementById('p').value);
  let R1=parseFloat(document.getElementById('r').value);
  let N1=parseFloat(document.getElementById('n').value);
  // formular for mortage monthly payment
  let r=R1*0.01
  let value= P1*(((r*((1+r)**N1)))/(((1+r)**N1)-1));
  let output1=document.getElementById('result');
  let output2=document.getElementById('output');
  
  if (value) {
    output2.value=value.toFixed(2);
    const nam=document.querySelector('#result');
    nam.innerHTML=''
    
  }
  else{
    output1.innerHTML="Please fill each section correctly!";
  }
};
// clear all button
 const clearText=()=>{
  const name1=document.querySelector('#p');
  const name2=document.querySelector('#r');
  const name3=document.querySelector('#n');
  const name4=document.querySelector('#result');
  const name5=document.querySelector('#output');
  name1.value='';
  name2.value='';
  name3.value='';
  name4.innerHTML='';
  name5.value='';

};