function authMiddleware(req, res, next){
    if(req.session.loggedUser != undefined){
        next();
    }else{
        res.redirect('/users/register');

    }

}

module.exports = authMiddleware;