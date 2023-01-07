window.onload = () => {
    let button =  document.querySelector("#btn");
 button.addEventListener("click", calculateBMI);
}

function calculateBMI(){
    let weight = document.querySelector("#weight").value;
    let height = document.querySelector("#height").value;
    let bmi = weight / (height * height);
    let result = document.querySelector("#result");
    result.innerHTML = bmi;

    if(height === " "|| isNaN(height))
     result.innerHTML = "Height entered is not valid!";
    else if(weight === " "|| isNaN(weight))
        result.innerHTML = "Weight enetered is not valid!";
    else{
        let bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if (bmi < 18.6) result.innerHTML = `Under Weight: <span>${bmi}</span>`;
        else if (bmi >= 18.6 && bmi <= 24.9) result.innerHTML = `Normal Weight: <span>${bmi}</span>`;
        else if (bmi >= 25 && bmi <= 29.9) result.innerHTML = `Over Weight: <span>${bmi}</span>`;
    }

}