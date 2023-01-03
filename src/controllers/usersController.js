const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
const session = require('express-session');

//** Modelo User

const User = require('../models/User')


const usersFilePath = path.join(__dirname, '../data/usersData.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


const usersController = {

    login: (req, res) => {
      res.render('login', {users});
    },

    loginProcess: (req, res ) => {
      /* let errors = validaciones(req);
      if(errors.isEmpty()){
        
      } */
      
      /* let errors = validationResult(req);
      if(errors.isEmpty()){
        let usersJson = fs.readFileSync('usersData.json',)
        let users;
        if(usersJson==""){
          users = [];
        } else{
          users = JSON.parse(usersJson);
        }
        for(let i =0; i<users.length; i++){
          if(users[i].email== req.body.email){
            if(bcryptjs.compareSync(req.body.password,users[i].password)){
            let usuarioALogearse = users[i];
            break
          }
        }
        }
        if(usuarioALogearse == undefined){
          return res.render('login',{errors: [{msg:'Credenciales inválidas'}]});
        }
        req.session.usuarioLogeado = usuarioALogearse;
        res.render('success');

      }else{
        return res.render('login',{errors: errors.errors})

      } */



      let userToLogIn = users.find( user => user.email == req.body.email);
      //let userToLogIn = User.findByfield('email',req.body.email)
      

      if(userToLogIn){
        let correctPassword = bcryptjs.compareSync(req.body.password, userToLogIn.password);
        if(correctPassword){
          delete userToLogIn.password;

          console.log(userToLogIn);
          req.session.loggedUser = userToLogIn;
          
          if(req.body.rememberme){
            res.cookies('userEmail', req.body.email, {maxAge: (60000)})
          }
          return res.redirect('/users/userProfile');
        }
      }

      return res.render('login',{
        errors: {
          email:{
            msg: 'las credenciales son inválidas'
        }
      }
    });
      
    },
    
    register: (req, res) => {
      res.render('register');
    },
    createUser: (req, res)=>{
      let img 

      if(req.files.length > 0){
        
        img = '/img/users/' + req.files[0].filename;

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
    
    res.redirect('/users/login'); //Hacemos redirect al home

      },


      profile: function(req, res){
        
        res.render('userProfile',{

          user: req.session.loggedUser

        });
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
      },
      logout: function(req,res){
        req.session.destroy();
        console.log(req.session);
        return res.redirect('/');
      }
      
}

module.exports = usersController;