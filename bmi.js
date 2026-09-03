

function calculateBmi() {
    let weight = document.getElementById('gethi').value
    let height = document.getElementById('getwi').value

    let bmi = weight / (height * height);
 let a = document.getElementById('showData').innerText

    if (bmi < 18.5) {
        document.getElementById('showData').innerText = 'Under Weight'
    }
    else if (bmi >= 18.5 && bmi <= 24.5) {
        document.getElementById('showData').innerText = 'Normal Weight'
    }
   else if ( a == ''){
     document.getElementById('showData').innerText = ' Enter Number'
   }
    else {
        document.getElementById('showData').innerText = 'Over Weight'
    }
}

