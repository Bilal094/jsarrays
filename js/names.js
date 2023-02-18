var names = [];
var count = 0;

function userName() {
    var promptCount = prompt("Hoeveel namen wil je in de array stoppen? (Minimaal 3)");
    if (promptCount >= 3) {
        for (i = 1; i <= promptCount; i++) {
            var promptName = prompt("Voer naam " + i + " in:");
            names.push(" "+promptName);
            document.getElementById("namesOrder").innerHTML = names;
            if (i == promptCount) {
                document.getElementById("namesReversed").innerHTML = names.reverse();
            }
        }
    } else {
        alert("Je moet 3 of meer namen in kunnen stoppen");
        userName();
    }
}

userName();