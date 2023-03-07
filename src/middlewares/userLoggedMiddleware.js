
let db = require("../database/models");

function userLoggedMiddleware(req, res, next){

    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail;
    console.log(emailInCookie, "Email in cookies");


    if (!emailInCookie) {

        next(); 
        
    }else{

        db.User.findOne({ where: { email: emailInCookie } })
        .then(function (user) {
            delete user.password
        
            if(user){
                req.session.loggedUser = user;
                res.locals.isLogged = true;
                res.locals.loggedUser = req.session.loggedUser;
            }
        
            next();
            
        })

    }
    
    
}

module.exports = userLoggedMiddleware;