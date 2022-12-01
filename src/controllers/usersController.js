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
      }


}

module.exports = usersController;