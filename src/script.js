document.addEventListener("DOMContentLoaded", function(){
    const display = document.getElementById('calc-display');
    const buttons=document.getElementsByClassName('btn');
    console.log(display);
    console.log('buttons');

    let currentvalue="";

    function evaluateResult(){
        console.log('currentvalue:', currentvalue);
        const convertedValue= currentvalue.replace("×", "*").replace("÷","/").replace("%","*0.01");
        
        const result = eval(convertedValue);
        currentvalue = result.toString();
        display.value = currentvalue;
    }

    for(let i = 0; i < buttons.length; i++){
        const button = buttons[i];
        button.addEventListener('click', function(){
            const value= button.innerText;

            if(value=="AC"){
                currentvalue="";
                display.value=currentvalue;
            } else if (value== "="){
                evaluateResult();
            }else{
               currentvalue+= value;
                display.value= currentvalue; 
            }
            
        })
    }

})