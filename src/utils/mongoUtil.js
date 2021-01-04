const mongoose = require('mongoose');

function MongoUtil() {
    this._user = process.env.dbUser || "dbAppUser";
    this._password = process.env.dbPass || "Password_123";
    this._server = "cluster0.mrshg.mongodb.net";
    this._database = "qidag";
    this._options = "retryWrites=true&w=majority";
    this._connectionString = `mongodb+srv://${this._user}:${this._password}@${this._server}/${this._database}?${this._options}`;

    mongoose.connect(this._connectionString, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log(`Connected to database`);
        this._db = mongoose.connection;
    }).catch(err => {
        console.error(`Unable to connect to database. ${err} \n ${this._connectionString}`);
        process.exit();
    });
    
}

MongoUtil.prototype = {
    getConnection: () => {
        return mongoose;
    },

    close: () => {
        mongoose.disconnect();
    }
}

module.exports = new MongoUtil();
