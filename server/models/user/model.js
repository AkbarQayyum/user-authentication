const mongoose = require('mongoose');
const schema = require('./schema');
const Users = mongoose.model('user', schema)
module.exports=Users