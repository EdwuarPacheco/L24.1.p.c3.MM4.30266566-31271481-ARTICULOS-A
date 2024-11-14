/*
En una tienda se procesan los datos de varios artículos: departamento, nombre, precio y
existencia. Se sabe que hay 3 departamentos: 1=niños, 2=damas, 3=caballeros.
Considerando que los datos se cargan en un array de objetos (Ej. estructura de cada objeto:
{departamento: 2, nombre: ‘Pijama’, precio: 15, existencia: 2}), se requiere una función que
retorne la cantidad de artículos sin existencia en un departamento dado.
Función: cantidadArticulosSinExistencia.
Parámetros: articulos (array de objetos articulo), departamento (un número).
Retorno: la cantidad de artículos que no tienen existencia en el departamento indicado. 
*/

let articulo = [
    {departamento: 2, nombre: 'Pijama', precio: 15, existencia: 2},
    {departamento: 1, nombre: 'Pijama', precio: 15, existencia: 0},
    {departamento: 3, nombre: 'Pijama', precio: 15, existencia: 0},
    {departamento: 2, nombre: 'Traje de gala', precio: 30, existencia: 2},
    {departamento: 3, nombre: 'Traje de gala', precio: 30, existencia: 0},
    {departamento: 1, nombre: 'Traje de gala', precio: 30, existencia: 5},
    {departamento: 1, nombre: 'Botas', precio: 17, existencia: 2},
    {departamento: 2, nombre: 'Botas', precio: 17, existencia: 10},
    {departamento: 3, nombre: 'Botas', precio: 17, existencia: 5},
]

function cantdArticNoExiste(articulos, departamento) {
    let cantidad = 0;
    for (let i = 0; i < articulos.length; i++) {
        if (articulos[i].departamento == departamento && articulos[i].existencia == 0) {
            cantidad++;
        }
    }
    return cantidad;
}

let salida = document.getElementById("salida")
salida.innerHTML+= "Cantidad de artículos sin existencia en el departamento 1: " +cantdArticNoExiste(articulo, 1);
salida.innerHTML+= "<br> Cantidad de artículos sin existencia en el departamento 2: " +cantdArticNoExiste(articulo, 2);
salida.innerHTML+= "<br> Cantidad de artículos sin existencia en el departamento 3: " +cantdArticNoExiste(articulo, 3);