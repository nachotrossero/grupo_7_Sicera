const fs = require('fs')

const User = {
    filename: '/data/usersData.json',
    getData:function(){
        return fs.readFileSync(this.filename,'utf-8')
    },
    findAll: function(id){
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id===id);
        return userFound;
    },
    findByfield: function(field, text){
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field]===text);
        return userFound;
        

    },


    create: function(usersData){

    }
    
}