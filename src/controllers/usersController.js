const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');

const usersFilePath = path.join(__dirname, '../data/usersData.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


const usersController = {

    login: (req, res) => {
        res.render('login', {users});
      },
    
      register: (req, res) => {
        res.render('register');
      },
      createUser: (req, res)=>{
        let img 

    if(req.files.length > 0){
      
      img = '/img/' + req.files[0].filename;

    } else {
      img = '/img/users/user-profile-icon-default.jpg';
    };

    let newUser = {
    "id": users[users.length - 1]['id'] + 1,
    "name": req.body.name,
    "lastname": req.body.lastname,
    "email": req.body.email,
    "password": bcryptjs.hashSync(req.body.password, 10), 
    //"category": req.body.category,
    "image": img
    };

     users.push(newUser); //Pisamos los datos de la variable 

    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, '\t')); //Volvemos a pasar a formato json
    
    res.redirect('/'); //Hacemos redirect al home

      },

      edit: function(req, res){
        let idUser = req.params.idUser

        let users = [
          {id: 1, name:'Nacho'},
          {id: 2, name:'Facu'},
          {id: 3, name:'Aylu'},
          {id: 4, name:'Jero'}
        ]
        let userToEdit = users[idUser];
        res.render('userToEdit', {userToEdit: userToEdit })
      }
}

module.exports = usersController;