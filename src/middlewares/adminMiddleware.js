
function adminMiddleware(req, res, next) {
    
    if(req.session.loggedUser == undefined){
        console.log(req.session.loggedUser);
        return res.redirect("/")

    }else{

        if (req.session.loggedUser.is_admin == 0) {
            console.log(req.session.loggedUser);
            return res.redirect("/")
            
        } else {

            next();

        } 

    }

    
}


module.exports = adminMiddleware;