let frutas = ["Mazana", "Banana", "Pera", "Fresa"];
alert("La lista de frutas es " + frutas + "\nEn la lista hay " + frutas.length + " elementos");

var frutaUser;

function añadir (){
    frutaUser = prompt("Que fruta quieres añadir?");
    frutas.push(frutaUser);
    alert("La lista de frutas es " + frutas + "\nEn la lista hay " + frutas.length + " elementos");
}

function borrar (){
    frutas.pop();
    alert("La lista de frutas es " + frutas + "\nEn la lista hay " + frutas.length + " elementos");

}