const fs = require('fs');
const path = require('path');
const bcryptjs = require('bcryptjs');
const session = require('express-session');

//** Modelo User

const User = require('../models/User')

let db = require("../database/models");
const { where } = require('sequelize');


const usersFilePath = path.join(__dirname, '../data/usersData.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));


const usersController = {

    login: (req, res) => {
      res.render('login', {users});
    },

    loginProcess: (req, res ) => {
            
      
      let userToLogIn;

      db.User.findOne({where: {email: req.body.email }})

      .then(function(userFound ){
        return userToLogIn = userFound;
      })
      .then(function(){

        if(userToLogIn != null){
          let correctPassword = bcryptjs.compareSync(req.body.password, userToLogIn.password);
          if(correctPassword){
            delete userToLogIn.password;

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
      })
    },
    
    register: (req, res) => {
      res.render('register');
    },
    createUser: (req, res)=>{
      let img 

      if(req.files.length > 0){
        
        img = '/img/users/' + req.files[0].filename;

      } else {
        img = '/img/users/default-avatar.png';
      };

      db.User.create({

        "first_name": req.body.name,
        "last_name": req.body.lastname,
        "email": req.body.email,
        "password": bcryptjs.hashSync(req.body.password, 10), 
        "image": img,
        "is_active": 1,
        "is_admin": 0    //Para consultar como hacerlo bien    
      })

    res.redirect('/users/login'); //Hacemos redirect al home

      },


      profile: function(req, res){
        
        res.render('userProfile',{

          user: req.session.loggedUser
        });
      },

      edit: function(req, res){
        
      },
      logout: function(req,res){
        req.session.destroy();
        return res.redirect('/');
      },
      allUsers: function(req, res){

        db.User.findAll()
        .then(function(users){
    
          return res.render('allUsers',{users});       
        })
      },
      deleteUser: function(req, res){

        db.User.destroy({
          where: {id: req.params.id}
        })
        res.redirect("/users/allUsers");
      },
      giveAdmin: function(req, res){

        let is_admin = req.body.admin;

        if(is_admin){
          db.User.update({

            "is_admin": 1,
            
          },
          {where: {id: req.params.id}});
        }else{
          
          db.User.update({

            "is_admin": 0,
            
          },
          {where: {id: req.params.id}});

        }


        res.redirect("/users/allUsers/");    
      }
        
}

module.exports = usersController;