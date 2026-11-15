let errorMessage;
let bmi;
document.getElementById('gethi').addEventListener('input',(e)=>{
init();
})
document.getElementById('getwi').addEventListener('input',(e)=>{
init();
})

function init(){
document.getElementById('showData').innerText = '';
bmi="";
}

function dataInput(){
    let weight = document.getElementById('gethi').value.trim();
    let height = document.getElementById('getwi').value.trim();
    if(!weight || !height){
document.getElementById('showData').innerText = 'All fields are required!';
errorMessage=setTimeout(() => {
    document.getElementById('showData').innerText = '';
}, 2000);
 return;
    }
   clearTimeout(errorMessage);
let heightInMeter = height / 100;

    bmi = weight / (heightInMeter * heightInMeter);
calculateBmi(bmi);
}


function calculateBmi(bmi) {
    let a = document.getElementById('showData').innerText
console.log(a);
    if (bmi < 18.5) {
        document.getElementById('showData').innerText = 'Under Weight'
    }
    else if (bmi >= 18.5 && bmi <= 24.5) {
        document.getElementById('showData').innerText = 'Normal Weight'
    }
    else {
        document.getElementById('showData').innerText = 'Over Weight'
    }
}

