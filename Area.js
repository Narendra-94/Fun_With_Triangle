const inputs = document.querySelectorAll(".input");

const button = document.querySelector("#btn");
const output = document.querySelector("#output");

function AreaOfTri(base, height){
    const area = (base * height)/2;
    return area;
}

function calAreaOfTri(){
    const area = AreaOfTri(Number(inputs[0].value),Number(inputs[1].value));
    output.innerText = "The area of the triangle is " + area + " cm²";

}

button.addEventListener('click', calAreaOfTri);