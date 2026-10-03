function add(){

    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");

    let result = document.getElementById("result");

    result.innerText = parseInt(num1.value) + parseInt(num2.value);

}

let add_buttonA = document.getElementById("add-btn");

add_buttonA.addEventListener("click", add);

// ------

function subtract(){

    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");

    let result = document.getElementById("result");

    result.innerText = parseInt(num1.value) - parseInt(num2.value);

}

let add_buttonB = document.getElementById("minus-btn")

add_buttonB.addEventListener("click",subtract)

// ------

function multiply(){

    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2")

    let result = document.getElementById("result");

    result.innerText = parseInt(num1.value) * parseInt(num2.value);

}

let add_buttonC = document.getElementById("multiply-btn")

add_buttonC.addEventListener("click",multiply)

// ------

function divide(){

    let num1 = document.getElementById("num1")
    let num2 = document.getElementById("num2")

    let result = document.getElementById("result");

    result.innerText = parseInt(num1.value) / parseInt(num2.value);

}

let add_buttonD = document.getElementById("divide-btn")

add_buttonD.addEventListener("click",divide)