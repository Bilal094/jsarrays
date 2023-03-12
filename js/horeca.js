const ice = {"balls" : 0, "cup" : 0, "cone" : 0};
const toppings = {"toppings" : 0};
const choice = ["A", "B", "C", "D"];

// Creating functions
function quantityBalls() {
    var strQuantity = prompt("Hoeveel bolletjes wilt u?");
    ice["balls"] = parseInt(strQuantity);
    flavour();
}

function flavour() {
    for (i = 1; i <= ice["balls"]; i++) {
        var iceFlavour = prompt("Welke smaak wilt u voor bolletje " + i + "? A) Aardbei, C) chocolade of V) vanille?").toUpperCase();
        switch (iceFlavour) {
            case "A":
               continue;
            case "C":
                continue;
            case "V":
                continue;
            default:
                alert("Kies een gegeven optie");
                flavour();
        }
    }
    placement();
}

function placement() {
    var icePlacement = prompt("Wilt u deze " + ice["balls"] + " bolletjes in A) een hoorntje of B) een bakje? ").toUpperCase();
    switch (icePlacement) {
        case "A":
            topping(icePlacement);
            break;
        case "B":
            topping(icePlacement);
            break;
        default:
            alert("Kies een gegeven optie");
            placement();
    }
    topping(icePlacement); 
}

function topping(icePlacement) { 
    var iceTopping = prompt("Wat voor topping wilt u: A) Geen, B) slagroom, C) sprinkels of D) caramel saus?").toUpperCase();
    if (choice.includes(iceTopping)) {
        if (iceTopping != "A") {
            toppings["toppings"] += 1;
            orderContinue(icePlacement); 
        } else {
            orderContinue(icePlacement); 
        }
    } else {
        alert("Kies een gegeven optie");
        topping(icePlacement); 
    }
}

function orderContinue(icePlacement) { 
    if (icePlacement == "A") {
        var stopOrGo = prompt("Hier is uw hoorntje met " + ice["balls"] + " bolletje(s). Wilt u nog meer bestellen? (Y/N)").toUpperCase();
    } else {
        var stopOrGo = prompt("Hier is uw bakje met " + ice["balls"] + " bolletje(s). Wilt u nog meer bestellen? (Y/N)").toUpperCase();
    }

    if (stopOrGo == "Y") {
        quantityBalls();
    } else if (stopOrGo == "N") {
        // Bonnetje
    } else {
        alert("Kies uit de gegeven opties");
        orderContinue(icePlacement); 
    }
}

quantityBalls();