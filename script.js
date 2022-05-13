// En este ejercicio deberéis realizar algunos cambios sobre las dos listas incluidas en "index.html".
// En la primera lista tendréis que hacer lo siguiente:
//    * Añadid la clase "element-n" a cada "span" de la lista, siendo "n" el número del lugar que ocupa en la lista
//      (por ejemplo el segundo "span" de la lista tendría la clase "element-2"). Para ello, haced uso de los selectores 
//      de nodo (parentNode, nextSibling, firstChild...) partiendo del "span" con la clase "selected" siempre.
//    * Tras añadir las clases, haced uso de "querySelectorAll" para obtener solo los elementos "li" con valor par
//      (teniendo en cuenta que el primer elmento es el 1) y, a continuación, eliminadlos.

//En la segunda lista, que en principio está vacía, deberéis hacer esto:
//    * Tenéis que generar dentro de esta lista, nodo a nodo, la misma estructura que ha quedado en la primera lista en
//      la que realizastéis los cambios. Tiene que quedar igual, con la misma jerarquía y con las mismas clases, pero con la
//      diferencia de que en vez de elementos "span" deben ser botones. Para replicar los elementos de la primera lista no hace
//      falta que la recorráis, podéis simplemente generar cada elemento "a mano" una detrás de otro (aunque si usáis la lista de
//      referencia para hacer algún tipo de bucle, mejor)
//    * Después de generar esta segunda lista, añadid el atributo disabled al último botón.
// Suerte!

window.addEventListener('load', onLoad);

function onLoad() {

    // Selecciono el elemento con la clase seleted
    let li_3 = document.getElementById('selected');
    console.log(li_3);

    // Selecciono el elemento padre
    let lista = li_3.parentNode;
    console.log(lista);

    // Selecciono el elemento padre
    let ul = lista.parentNode;
    console.log(ul);

    // Hijos ul
    let hijosUl = ul.childNodes;
    console.log(hijosUl);

    for (let i = 0; i < hijosUl.length; i++) {
        let hijosLi = hijosUl[i].childNodes;
        console.log(hijosLi);
    }


    // Selecciono todos los elementos span
    let span = document.querySelectorAll('span');

    //Contador de elementos
    var cont = 0;
    // Bucle para añadir clases
    for (var i = 0; i < span.length; i++) {
        increneto = ++cont;
        span[i].className += " element-" + increneto;
    }

    let li = document.querySelectorAll('li');
    console.log(li);

}