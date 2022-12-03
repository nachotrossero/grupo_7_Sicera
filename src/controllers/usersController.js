const fs = require('fs');
const path = require('path');

const usersFilePath = path.join(__dirname, '../data/usersData.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


const usersController = {

    login: (req, res) => {
        res.render('login', {users});
      },
    
      register: (req, res) => {
        res.render('register');
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