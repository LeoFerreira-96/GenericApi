import mongoose from 'mongoose'
mongoose.Promise = global.Promise
export default mongoose.connect('mongodb+srv://dbuser:dbuser123@mgdb-7rzmy.mongodb.net/test?retryWrites=true&w=majority', { 
    useUnifiedTopology: true, 
    useNewUrlParser: true 
})

