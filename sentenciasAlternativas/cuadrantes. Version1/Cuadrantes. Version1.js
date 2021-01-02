let x = parseInt(prompt("Dame el primer cuadrante: [-10 10]"));
let y = parseInt(prompt("Dame el primer cuadrante: [-10 10"));
let quadrant;
if (x > 0) {
    if (y > 0) {
        quadrant = 1;
    } else if (y < 0) {
        quadrant = 4;
    }
} else if (x < 0) {
    if (y > 0) {
        quadrant = 2;
    } else if (y < 0) {
        quadrant = 3;
    }
}
let msg = "La coordenada (" + x + ", " + y + ")";
if (quadrant == undefined) {
    msg = msg + " NO está en ningún";
} else {
    msg = msg + " está en el " + quadrant + "º";
}
msg = msg + " cuadrante.";
alert(msg);

