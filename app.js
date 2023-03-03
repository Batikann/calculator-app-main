const btn=document.querySelectorAll('.btn-default');
const screenDisplay=document.querySelector('.result');
const process=document.querySelector('.process');

let calculateArr=[]
let test;


btn.forEach(val=>{
    val.addEventListener('click',calculate)
})



function calculate(e) {
    const value=e.target.innerText;
    if (value==="RESET") {
        calculateArr=[]
        screenDisplay.innerText="";
        process.innerText="0"
    }
    else if(value==="DEL"){
        const arr=['x','-','+','/']
        for (let i = 0; i < arr.length; i++) {
           if (calculateArr.indexOf(arr[i]) >-1) {
            calculateArr.splice(calculateArr.indexOf(arr[i]),calculateArr.length);
            screenDisplay.innerText=calculateArr.join('');
            break;
           
           }
           else if (calculateArr.indexOf(arr[i]) < 0) {
            calculateArr.splice(calculateArr.indexOf(arr[i]),calculateArr.length);
            screenDisplay.innerText=0;
            process.innerText="";
           }
        }
        
    }
    else if(value==="="){
        process.innerText=test;
        if (test.split('').indexOf('x') >-1) {
            const item=test.replace('x','*')
            screenDisplay.innerText=eval(item).toFixed(2);
        }
        else{
            screenDisplay.innerText=eval(test).toFixed(2)
        }
        
    }
    else{
        calculateArr.push(value);
        test=calculateArr.join('');
        screenDisplay.innerText=test;
    }

}