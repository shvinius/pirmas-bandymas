window.onload = function() {
    let rezultatas;
    rezultatas = perimetras (24853, 2941);
    console.log (rezultatas);
}
function perimetras (x, y) {
    let rezultatas;
    rezultatas = 2 * (x + y);
    return rezultatas;
}