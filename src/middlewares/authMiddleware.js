function authMiddleware(res,req,next){
    if(req.session.usuarioLogeado != undefined){
        next();
    }else{
        res.send('Esta página es solo para usuarios');

    }

}

module.exports = authMiddleware;