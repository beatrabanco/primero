let nombres = [];   //creamos array nombres para almacenar los nombres que vienen del boton id="nombre"

//funcion para guardar los nombres del boton id="nombre"
function guardarNombre() {
    let valor = document.getElementById("nombre").value;    //metemos en variable valor los nombres que recoge del boton id="nombre"
    console.log(valor);//comprueba que guarda los nombres

    nombres.push(valor);//añade los nombres al array que recogemos en la variable valor 
    console.log(nombres);//comprueba

    listarElementos();
    // borrarValor();

    // document.write( 'nombres');  //no hace nada habra que eliminar
}
//creamos la funcion aleatorio (copiada directamt de w3school)
function mialeatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//creamos la funcion listarElementos() que nos llama a los nombres que iremos almacenando en el array nombres[]
function listarElementos() {
    let listadoNombres = "";//creamos la varible vacia, para poder ir metiendo los nombres en la lista 

    //con el bucle creamos la lista
    for (let i = 0; i < nombres.length; i++) {  //recorre el  array nombres[]
        listadoNombres += "<li>" + nombres[i] + "</li>";    //en cada lectura del array nombres[] crea una fila de la lista
    }
    
    document.getElementById("campos").innerHTML = listadoNombres;   //imprime los nombres en html en el lugar con id="campos" en forma de lista
}