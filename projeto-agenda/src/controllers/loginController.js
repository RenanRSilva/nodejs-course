const Login = require('../models/LoginModel')

exports.index = (req, res) => {
  res.render('login');
};

exports.register = async (req, res) => {
  const login  = new Login(req.body);
  await login.register();
  
  if(login.errors.length > 0){//Se tiver erro o usuário não é registrado
    req.flash('errors', login.errors);
    req.session.save(function(){
      res.redirect('back');
    });
    return;
  }
  
  res.send(login.errors);
};