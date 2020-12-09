let productoUno = parseFloat(prompt("Ingresar valor del primer producto", "primer producto"));
let productoDos = parseFloat(prompt("Ingresar valor del primer producto", "segundo producto"));
let productoTres = parseFloat(prompt("Ingresar valor del tercer producto", "tercer producto"));
let sumaProductos = productoUno + productoDos + productoTres;
let promedioProductos = (productoUno + productoDos + productoTres) / 3;
let productosIva = sumaProductos * 1.21;
document.write (`// El valor total de sus productos es: ${sumaProductos} pesos //`);
document.write (`// El promedio total de sus productos es: ${promedioProductos} //`);
document.write (`// El precio total (con IVA) es de ${productosIva} //`);


