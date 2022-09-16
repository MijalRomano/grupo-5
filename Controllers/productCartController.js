const controller = {
productCart: (req,res) => {
    return res.render("productCart");

},
index: (req,res)=>  {
    return res.render("index");

},
register: (req,res)=>  {
    return res.render("register");

},
productDetail: (req,res)=>  {
    return res.render("productDetail");

}, 
login: (req,res)=>  {
    return res.render("login");
  } }
module.exports = controller;
