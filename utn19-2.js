let largoTerreno = parseFloat(prompt("Ingrese el largo","largo terreno"));
let anchoTerreno = parseFloat(prompt("Ingrese el ancho","ancho terreno"));
let perimetro = (largoTerreno*2) + (anchoTerreno*2);
let perimetro3 = perimetro * 3;

document.write(`// Usted debe comprar ${perimetro3} de alambre //`);


let radioTerreno = parseFloat(prompt("Ingrese el radio", "radioterreno"));
let perimetroCirculo = 2 * Math.PI * radioTerreno 
let perimetroCirculo3 = perimetroCirculo * 3

document.write(`// Usted debe comprar ${perimetroCirculo3} de alambre //`);


let largo = parseFloat(prompt("Ingrese el largo"));
let ancho = parseFloat(prompt("Ingrese el ancho"));
let superficie = largo * ancho;
let cantidadCemento = superficie *2;
let cantidadCal = superficie *3;

document.write(`// Usted debe comprar ${cantidadCemento} de cemento y ${cantidadCal} de cal //`);
