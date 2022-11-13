const inputs = document.querySelectorAll(".input-angle");
const isTriBtn = document.querySelector("#is-tri-button");
const output = document.querySelector("#output");


function sumOfAnglesCalculate(angle1,angle2,angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTri(){
    console.log("clicked");
    const sumOfAngles = sumOfAnglesCalculate(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
    if( sumOfAngles === 180 ){
        output.innerText = "Yeeeyy, The angles form a triangle";
    }
    else{
        output.innerText = "Oh no ! The angles do not form a triangle";
    }
}

isTriBtn.addEventListener('click',isTri);