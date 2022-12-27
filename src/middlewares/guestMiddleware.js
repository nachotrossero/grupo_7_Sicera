function guestMiddleware(res,req,next){
    if(req.session.usuarioLogeado == undefined){
        next();
    }else{
        res.send('Esta página es solo para invitados');

    }

}

module.exports = guestMiddleware;