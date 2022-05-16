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

    // --------- PUNTO 1 ---------- //

    // Selecciono el elemento con la clase seleted
    let spam_3 = document.getElementById('selected');
    console.log(spam_3);

    let spam_3B = document.querySelectorAll("span.selected");
    console.log(spam_3B);

    // Selecciono el elemento padre
    let li_3 = spam_3B[0].parentNode;
    console.log(li_3);

    // Selecciono el elemento padre
    let ul = li_3.parentNode;
    console.log(ul);

    // Hijos ul
    let hijosUl = ul.childNodes;
    console.log(hijosUl);

    // Hijos li
    // var span = [];
    // for (let i = 0; i < hijosUl.length; i++) {
    //     let hijosLi = hijosUl[i].childNodes;
    //     span.push = hijosLi;
    //     console.log(hijosLi);
    // }

    // console.log(span);


    // Selecciono todos los elementos span
    let span = document.querySelectorAll('span');

    // Contador de elementos
    var cont = 0;
    // Bucle para añadir clases
    for (var i = 0; i < span.length; i++) {
        increneto = ++cont;
        span[i].className += " element-" + increneto;
    }

    // --------- PUNTO 2 ---------- //

    // Selecciono todos los elementos li
    let li = document.querySelectorAll('li');
    console.log(li);

    // Recorro con bucle los elemento li
    var arrayPares = [];
    for (let i = 0; i < li.length; i++) {
        // Selecciono los elementos pares
        if (i % 2 != 0) {
            // Compruebo que entra en el if
            console.log("Entra en if");
            // Guardo cada iteración que cumple la condición
            liPares = li[i];
            console.log(liPares);
            // Añado cada iteración a array
            arrayPares.push(liPares);
            // Elimino los elementos pares
            liPares.remove();
        };
    }
    //Muestro el erray de elementos pares
    console.log(arrayPares);

    // --------- PUNTO 3 ---------- //

    // Selecciono el elemento con id list2
    let ul_2 = document.getElementById('list2');
    console.log(ul_2);

    // Recorre tantos elementos como la lsta anterior
    for (let i = 0; i < span.length; i++) {

        // Crea elementos li
        let li2_1 = document.createElement("li");
        // Añade elementos li a ul
        let li2 = ul_2.appendChild(li2_1);
        // Crea elemento button
        let button = document.createElement("button");
        // Añade elementos button a li
        li2.appendChild(button);
    }

    // Seeleciona los elementos button
    var button = document.querySelectorAll("button");
    console.log(button);

    // Contador de elementos
    var cont = 0;
    // recorre todos los elementos button
    for (let i = 0; i < button.length; i++) {
        // contador
        increneto = ++cont;
        // Añade la clase a los elementos button
        button[i].className += " element-" + increneto;
        // Escribe texto en los elementos button
        button[i].innerHTML = "texto ejemplo " + increneto;
    }

    // --------- PUNTO 4 ---------- //

    // let claseBoton = "element-" + button.length;
    // let ultimoBotonClase = document.getElementsByClassName(claseBoton);
    // console.log(ultimoBotonClase);
    // ultimoBotonClase[1].setAttribute("disabled", "");

    // Calcula el valor del último botón
    let numUltimoBoton = button.length - 1;
    console.log(numUltimoBoton);
    // Seleciona el último botón
    let ultimoBoton = button[numUltimoBoton];
    console.log(ultimoBoton);
    // Añade atributo al último botón
    ultimoBoton.setAttribute("disabled", "");



}