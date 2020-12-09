let gradosF1 = parseFloat(prompt("Por favor selecciones los grados","Grados Fahrenheit"))
let gradosC1 = (gradosF1 -32) / 1.8000;
document.write(`// ${gradosF1} grados Fahrenheit son ${gradosC1} Centígrados //`);

let gradosC2 = parseFloat(prompt("Por favor selecciones los grados","Grados Centígrados"));
let gradosF2 = (gradosC2 * 1.8000) + 32; 
document.write(`// ${gradosC2} grados Centígrados son ${gradosF2} Fahrenheit //`);
