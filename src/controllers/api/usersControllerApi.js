const fs = require("fs");
const path = require("path");
const bcryptjs = require("bcryptjs");
const session = require("express-session");

//** Modelo User

let db = require("../../database/models");
const { where } = require("sequelize");
const { use } = require("../../routers/api/usersRouterApi");


const usersControllerApi = {

  profile: function (req, res) {
    
    db.User.findByPk(req.params.id)
    .then(function(user){

    let response = {        
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            image: user.image,
            pathImg: `http://localhost:${process.env.PORT || 3000}${user.image}`
        }            
    

    return res.json({response});
})
  },

  allUsers: function (req, res) {
    db.User.findAll({
      attributes: {exclude: ['password']}
    })
    .then(function (users) {
      
        let usersFound = []

        for (let i = 0; i < users.length; i++) {

            usersFound[i] = {
            id: users[i].id,
            first_name: users[i].first_name,
            last_name: users[i].last_name,
            email: users[i].email,
            detail: `http://localhost:${process.env.PORT || 3000}/users/api/userProfile/${users[i].id}`,
            image: users[i].image,
            pathImg: `http://localhost:${process.env.PORT || 3000}${users[i].image}`
            }            
        }
        
        let response = {
            total: users.length,
            data: usersFound,            
            status: 200

        }


      return res.json({ response });
    });
  }
};

module.exports = usersControllerApi;
