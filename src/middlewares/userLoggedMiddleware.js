function userLoggedMiddleware(req, res, next){
    res.locals.isLogged = false;
    if(req.session.loggedUser){
        res.locals.isLogged = true;
        res.locals.loggedUser = req.session.loggedUser
        console.log(res.locals.loggedUser + "el userlogged middleware funciona")
    }
    next();
}

module.exports = userLoggedMiddleware;