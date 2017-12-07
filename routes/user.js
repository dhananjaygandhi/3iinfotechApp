var stores = require("konphyg")(__dirname + "/../stores");
var library = require("../services/common");
var users = stores("users");

exports.setup = function (app) {
  //////// GET user by id //////////////////
  app.get('/user/:id', (req, res) => {
    let result = library.filter(users, req.params.id)[0];
    res.json(result ? result : {});
  });

  //////// GET all users ///////////////////
  app.get('/user', (req, res) => {
    res.json(users);
  });

  ///////// POST a user //////////////////////
  app.post('/user', (req, res) => {
    let lastId = 0;
    if(users.length) {
      lastId = users[users.length - 1].id;
    }
    let id = lastId + 1;
    let user = req.body;
    user.id = id;           // Adding id to user json
    users.push(user);
    res.json(users);
  });

  ////////// DELETE one user /////////////////
  app.delete('/user/:id', (req, res) => {
    let result = library.deleteOne(users, req.params.id);
    users = result ? result : [];
    res.json(result);
  });

  ////////// DELETE all users //////////////////
  // app.delete('/user', (req, res) => {
  //   users = [];
  //   res.json(users);
  // });
};
