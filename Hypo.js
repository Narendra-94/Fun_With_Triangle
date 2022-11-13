const sides = document.querySelectorAll(".side-input");
const button = document.querySelector("#btn");
const output = document.querySelector("#output");

function sumOfSqrCalculate(a, b){
    const sumOfSqrs = a*a + b*b;
    return sumOfSqrs;
}

function calculateHypotenuse(){
    const sumOfSqrs =sumOfSqrCalculate(Number(sides[0].value),Number(sides[1].value));
    const lenOfHypo = Math.sqrt(sumOfSqrs);
    output.innerText = "The length of hypotenuse is " + lenOfHypo;
}

button.addEventListener('click', calculateHypotenuse);