const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()
function MongoUtil() {
    this._user = process.env.DB_USER
    this._password = process.env.DB_PASS
    this._server = process.env.DB_SERVER
    this._database = process.env.DB_NAME
    this._options = process.env.DB_OPTIONS
    this._connectionString = `mongodb+srv://${this._user}:${this._password}@${this._server}/${this._database}?${this._options}`

    mongoose.connect(this._connectionString, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log(`Connected to database`)
        this._db = mongoose.connection
    }).catch(err => {
        console.error(`Unable to connect to database. ${err} \n ${this._connectionString}`)
        process.exit()
    });
    
}

MongoUtil.prototype = {
    getConnection: () => {
        return mongoose
    },

    close: () => {
        mongoose.disconnect()
    }
}

module.exports = new MongoUtil()