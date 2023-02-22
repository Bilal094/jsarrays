num = [2, 4, 6 ,8];

function tafels(arr) {
    for (i = 0; i < arr.length; i++) {
        var title = document.createElement("h2");
        var table = document.createElement("p");
        title.innerHTML = `Tafel van ${arr[i]}`;
        for (x = 1; x <= 10; x++) {
            table.innerHTML += `${x} * ${arr[i]} = ` + (x * arr[i]) + "<br>"
        }
        document.body.appendChild(title);
        document.body.appendChild(table);
    }
}

tafels(num);