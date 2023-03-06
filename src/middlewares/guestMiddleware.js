function guestMiddleware(req,res,next){
    if(req.session.loggedUser == undefined){
        next();

    }else{
        //console.log(req.session.loggedUser);
        
        return res.redirect('/users/userProfile');

    }

}

module.exports = guestMiddleware;