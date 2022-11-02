const Users = require('../../models/user/model')
let jwt = require("jsonwebtoken");
const getUser = async (req, res) => {
    try {
        let data = await Users.find();
        res.send(data)
    } catch (error) {
        res.send({error})
    }
}

const postUser = async (req, res) => {
  try {
      let data = await new Users(req.body)
      await data.save()
    res.send('user register successfully');
  } catch (error) {
    res.send({ error });
  }
};



const verifyUsers = async (req, res) => {
  try {
   res.send(req.body)
  } catch (error) {
    res.send({ error });
  }
};

const loginUser = async (req, res) => {
  try {
    let data = await Users.findOne({
      email: req.body.email,
      password: req.body.password,
    });

    if (data !== null) {
      let token = await jwt.sign({ data }, process.env.SECRET);
      res.send({ token: token });
    } else {
      res.status(404).json({ error: "user not found" });
    }
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
    getUser,
    postUser,
  loginUser,
    verifyUsers
}