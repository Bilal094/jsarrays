var title = document.createElement("h1");
var arrDisplay = document.createElement("p");
let numArr = [];
let num = prompt("Voer een getal in:");

for (let i = 0; i <= num; i++) {
    numArr.push(i);
}

arrDisplay.innerHTML = "Array : " + numArr + "<br>";
document.body.appendChild(arrDisplay);

for (let i = 0; i <= num; i++) {
    for (let x = 0; x <= i; x++) {
        arrDisplay.innerHTML += numArr[x];
    }
    arrDisplay.innerHTML += "<br />";
}