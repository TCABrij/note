document.addEventListener('DOMContentLoaded', ()=>{
    let inputField = document.getElementById('inputField');

    if(inputField.value == ' ' || inputField.value == null || inputField.value == undefined){
       disableButton();
    }
    else{
       enableButton();   
    }
    inputField.addEventListener('keyup', enableButton);
    inputField.addEventListener('keydown', ()=>{
        if(inputField.value == '')
           disableButton();
    })
})

function disableButton(){
    let button = document.querySelector('#button');
    button.style.opacity = '0.3';
    button.disabled = 'true';
}
function enableButton(){
    let button = document.querySelector('#button');
    button.disabled = 'false';
    button.style.opacity = '1';
}