//? Para chequear
/* const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../data/usersData.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8')); */




function userLoggedMiddleware(req, res, next){

    res.locals.isLogged = false;
    if(req.session.loggedUser){
        res.locals.isLogged = true;
        res.locals.loggedUser = req.session.loggedUser
    }
   /*  let emailInCookie = req.cookies.userEmail;
    let userFromCookie = users.find( user => user.email == req.body.email);
    if(userFromCookie){
        req.session.loggedUser = userFromCookie;
    } */
    next();
}

module.exports = userLoggedMiddleware;