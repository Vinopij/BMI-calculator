window.onload = () => {
    let button = document.querySelector("#btn");

    button.addEventListener("click", calculateBMI);
}

function calculateBMI() {

    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);

    let result = document.querySelector("#result");
    
    if (height === "" || isNaN(height))
    result.innerHTML = "Podaj swój wzrost!";

    else if (weight === "" || isNaN(weight))
    result.innerHTML = "Podaj swoją wagę!";

    else {
        let bmi = (weight / ((height * height) / 10000)).toFixed(2);
        console.log(bmi);

        if (bmi < 18.6) result.innerHTML = 'Niedowaga';
        else if (bmi >= 18.6 && bmi <24.9) result.innerHTML = 'Waga prawidłowa';
        else result.innerHTML = 'Nadwaga!';
    }
}

