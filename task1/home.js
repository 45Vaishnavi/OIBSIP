const display = document.getElementById("display");

function append(value) {
    if (display.innerText === "0" && value !== ".") {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
    }

function clearDisplay() {
    display.innerText = "0";
    }

function backspace() {
    display.innerText = display.innerText.slice(0, -1) || "0";
    }

function calculate() {
    try {
        display.innerText = eval(display.innerText.replace(/÷/g, "/").replace(/×/g, "*"));
    } catch {
        display.innerText = "Error";
    }
    }

function plusMinus() {
    const val = display.innerText;
        if (val.startsWith("-")) {
            display.innerText = val.slice(1);
        } else if (val !== "0") {
            display.innerText = "-" + val;
        }
    }