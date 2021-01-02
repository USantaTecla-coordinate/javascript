let row = parseInt(prompt("Dame el primer cuadrante: [-10 10]"));
let column = parseInt(prompt("Dame el primer cuadrante: [-10 10"));
let quadrant;
if (row != 0 && column != 0) {
    quadrant = 1;
    if (column < 0) {
        quadrant += 2;
    }
    if ((row > 0 && column < 0) || (row < 0 && column > 0)) {
        quadrant++;
    }
}
let msg = "La coordenada (" + row + ", " + column + ")";
if (quadrant == undefined) {
    msg += " NO está en ningún";
} else {
    msg += " está en el " + quadrant + "º";
}
msg += " cuadrante.";
alert(msg);


