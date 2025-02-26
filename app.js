let friends = [];

function addFriend(){
    let friendName = document.getElementById('amigo').value;
    
    // Comprobar que no se ingrese un nombre vacío ni números

    if (friendName === '' || !isNaN(friendName)) {
        alert("Ingrese un nombre válido");
        return;
    }else{
        friends.push(friendName);
        document.getElementById('amigo').value = '';
        console.log(friends);
        updateListFriends(friends);
    }
}

function updateListFriends(friends){
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = '';

    // Actualizar la lista de amigos

    for (let index = 0; index < friends.length; index++) {
        listaHTML.innerHTML += `<li>${friends[index]}</li>`;
    }
}

function randomFriend(){

    // Elegir un amigo aleatorio

    if(friends.length > 0){
        let random = Math.floor(Math.random() * friends.length);
        let friend = document.getElementById('resultado');
        document.getElementById('listaAmigos').innerHTML = '';
        friend.innerHTML = `Tú amigo secreto es ${friends[random]}`;
    }else{
        alert("No hay amigos para elegir");
    }
}