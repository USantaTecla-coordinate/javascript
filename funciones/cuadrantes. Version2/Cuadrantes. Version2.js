function getQuadrant(x, y) {
    let quadrant;
    if (x != 0 && y != 0) {
        quadrant = 0;
        if (x > 0) {
            quadrant++;
        }
        if (y < 0) {
            quadrant += 3;
        } else if (x < 0) {
            quadrant += 2;
        }
    }
    return quadrant;
}
let x = parseInt(prompt("Dame el primer cuadrante: [-10 10]"));
let y = parseInt(prompt("Dame el primer cuadrante: [-10 10"));
let quadrant = getQuadrant(x, y);
let msg = "La coordenada (" + x + ", " + y + ")";
if (quadrant == undefined) {
    msg = msg + " NO está en ningún";
} else {
    msg = msg + " está en el " + quadrant + "º";
}
msg = msg + " cuadrante.";
alert(msg);

