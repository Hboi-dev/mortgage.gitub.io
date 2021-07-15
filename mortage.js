press=()=>{
  // collect input value
  let P1=parseFloat(document.getElementById('p').value);
  let R1=parseFloat(document.getElementById('r').value);
  let N1=parseFloat(document.getElementById('n').value);
  // formular for mortage monthly payment
  let r=R1*0.01
  let value= P1*(((r*((1+r)**N1)))/(((1+r)**N1)-1));
  let output=document.getElementById('result');
  if (value) {
    output.innerHTML="Your monthly payment will be (N): "+ value.toFixed(2);
    
  }
  else{
    output.innerHTML="Please fill each section correctly!"
  }
}
