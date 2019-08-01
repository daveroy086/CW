function oppositeNumber(number) {
    var a = number;
    var aA = Math.abs(a);
    var aO = 0;
    a < 0 ? (aO = aA) : (aO = (0 - aA));
    return aO;
}

/*
function oppositeNumber(number) {
    var a = number;
    var aA = Math.abs(a);
    var aO = 0;
    a < 0 ? (aO = aA) : (aO = (0 - aA));
    console.log(aO);
}

//test
oppositeNumber(-1);
oppositeNumber(2);
*/