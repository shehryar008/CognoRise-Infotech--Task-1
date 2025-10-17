function calculate() {
    var age = document.getElementById('age').value;
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    var male = document.getElementById('m').checked;
    var female = document.getElementById('f').checked;

    if (age === "" || weight === "" || height === "") {
        alert("Please add age, weight, and height.");
        return;
    }

    age = parseInt(age);
    weight = parseInt(weight);
    height = parseInt(height);

    var bmi = weight / ((height / 100) * (height / 100));
    var result = "";

    if (bmi < 18.5) {
        result = "You are underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        result = "You are healthy";
    } else if (bmi >= 25 && bmi < 30) {
        result = "You are overweight";
    } else {
        result = "You are obese";
    }

    var pbmi = document.getElementById('col5');
    pbmi.innerHTML = "Your BMI is: " + bmi.toFixed(2);

    var pbmi2 = document.getElementById('col6');
    pbmi2.innerHTML = result;

    updateChart(bmi);
}

function updateChart(bmi) {
    var ctx = document.getElementById('bmiChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Underweight', 'Healthy', 'Overweight', 'Obese'],
            datasets: [{
                label: 'BMI Category',
                data: [18.5, 24.9, 29.9, 30],
                backgroundColor: ['#3498db', '#2ecc71', '#f1c40f', '#e74c3c']
            }, {
                label: 'Your BMI',
                data: [bmi],
                backgroundColor: ['#8e44ad']
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    max: 40
                }
            }
        }
    });
}

document.getElementById('btn').addEventListener("click", calculate);
