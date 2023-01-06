const fs = require('fs')
const path = require('path');


const User = {
    filename: '../data/usersData.json',
    getData:function(){
        let usersFilePath = path.join(__dirname, '../data/usersData.json')
        const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
        return users;
    },

    generateId: function(){
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if (lastUser){
            return lastUser.id + 1;
        }
        return 1;
    },
    findAll: function(){
        return this.getData();
    },
    findByPk: function(id){
        let allUsers = this.getData();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
    },
    findByfield: function(field, text){
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] === text);
        return userFound;
    },
    create: function(usersData){
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateId(),
            ...usersData
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.filename, JSON.stringify(allUsers,null, ' '));
        return true;
    },
    //minuto 29.
    delete: function(id){ 
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(oneUser => oneUser.id !==id);
        fs.writeFileSync(this.filename, JSON.stringify(allUsers,null, ' '));
        return true;
    }
}

module.exports = User;