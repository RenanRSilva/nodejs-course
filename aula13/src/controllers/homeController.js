
exports.paginaInicial = (req, res) => {
        req.session.usuario = {nome: 'Luiz', logado: true}
        res.render('index');
        return;
        
};

exports.trataPost = (req, res,) => {
    res.send(req.body);
    return;
};