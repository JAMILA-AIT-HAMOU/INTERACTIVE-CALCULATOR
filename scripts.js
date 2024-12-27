const displayResult=document.getElementById('display-result');
const buttons= document.querySelectorAll('button');


//stores the inputs
let previousInput='';
let currentInput='';
let operator='';



buttons.forEach((button)=>{
  button.addEventListener('click', ()=>{
    const value= button.textContent;

    //if it's a number
    if (!isNaN(value)){
      currentInput+=value;
      displayResult.textContent=currentInput
    }else if (value==='C'){
      //clear everything
      currentInput='';
      previousInput='';
      operator='';
      displayResult.textContent='0'
    }else if (value==='='){
      //calculate the result
      currentInput=eval(`${previousInput}${operator}${currentInput}`);
      displayResult.textContent=currentInput;
      previousInput='';
      operator='';

    }else if(value==='.'){
      //add a decimall point only if it's not already in the currentInput
      if(!currentInput.includes('.')){
        currentInput+=".";
        displayResult.textContent=currentInput;
      }
    }
    else if (value === "⌫"){
      //remove the last caracter from currentInput
      currentInput=currentInput.slice(0,-1)||"0";
      displayResult.textContent=currentInput;
    }
    else{
      //if it's an operator
      if (currentInput){
        operator=value;
        previousInput=currentInput;
        currentInput='';
      }
    }



  })
})
