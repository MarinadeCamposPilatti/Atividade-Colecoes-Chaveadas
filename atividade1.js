function getAdmin(map) {
    let admins = [];
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key)
        }
    }
}

const usuarios = new Map();

usuarios.set('José', 'Admin');
usuarios.set('Marina', 'Admin');
usuarios.set('Kerolin', 'User');
usuarios.set('François', 'Admin');
