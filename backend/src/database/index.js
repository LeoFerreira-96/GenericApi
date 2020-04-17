const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://dbuser:dbuser123@mgdb-7rzmy.mongodb.net/test?retryWrites=true&w=majority' {useMongoClient: true})
mongoose.Promise = global.Promise;

module.exports = mongoose

