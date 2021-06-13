
plusButton.addEventListener('click', () =>{

    if(checkNumber(numberOne.value, numberTwo.value)){
        result.innerText = numberOne.value + numberTwo.value;
        hideAlert();
       
    }else{
        result.innerText = "";
        showAlert();
  
    }
});