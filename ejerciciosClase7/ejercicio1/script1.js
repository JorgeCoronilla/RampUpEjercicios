function holaMundo(){
    alert("Hola Mundo!");
}

function holaMundo2(){
    return "Hola Mundo2!";
}

//console.log(holaMundo());
//console.log(holaMundo2());

function saludar(nombre){
    alert("Hola "+nombre+"!!");
}

( function () {
    let nombre = "Davinia"; //Si la declaráramos con var seguiría siendo local
    alert("Hola " + nombre);
})();