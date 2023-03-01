
let db = require("../database/models");

function userLoggedMiddleware(req, res, next){

    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail;
    //console.log(emailInCookie, "Email in cookies");

    let userFromCookie;

    if (emailInCookie) {

        db.User.findOne({ where: { email: emailInCookie } })
        .then(function (user) {
            return (userFromCookie = user)
        })
    }
    
    
    if(userFromCookie){
        req.session.loggedUser = userFromCookie;
    }
    

    if(req.session.loggedUser){
        res.locals.isLogged = true;
        res.locals.loggedUser = req.session.loggedUser;
    }

    next();
}

module.exports = userLoggedMiddleware;