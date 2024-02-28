var a = document.createElement("div");
document.body.append(a)

function ten() {
    a.innerHTML = "10"
    setTimeout(nine, 1000);

}
function nine() {
    a.innerHTML = "9"
    setTimeout(eight, 1000);
}

function eight() {
    a.innerHTML = "8"
    setTimeout(seven, 1000);
}

function seven() {
    a.innerHTML = "7"
    setTimeout(six, 1000);
}

function six() {
    a.innerHTML = "6"
    setTimeout(five, 1000);
}

function five() {
    a.innerHTML = "5"
    setTimeout(four, 1000);
}

function four() {
    a.innerHTML = "4"
    setTimeout(three, 1000);
}

function three() {
    a.innerHTML = "3"
    setTimeout(two, 1000);
}

function two() {
    a.innerHTML = "2"
    setTimeout(one, 1000);
}

function one() {
    a.innerHTML = "1"
    setTimeout(text, 1000);
}

function text() {
    a.innerHTML = "Happy Independence Day"
}

setTimeout(ten, 1000);







