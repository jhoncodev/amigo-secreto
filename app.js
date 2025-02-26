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
    }
}