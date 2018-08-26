const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/UserList", {
    useNewUrlParser: true
});

var userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    reservations: [],
    validated: {
        type: Boolean,
        defaulValue: false
    },
    isAdmin: {
        type: Boolean,
        defaulValue: false
    }
})

var User = mongoose.model("user", userSchema)

exports.create = function(user) {
    return new Promise(function(resolve, reject) {
        var u = new User(user)

        u.save().then((newUser) => {
            resolve(newUser)
        }, (error) => {
            reject(error)
        })
    })
}

exports.get = function(id) {
    return new Promise(function(resolve, reject) {
        User.findOne({_id:id}).then((post) => {
            console.log(user)
            resolve(user)
        }, (error) => {
            reject(error)
        })
    })
}

exports.getAll = function() {
    return new Promise(function(resolve, reject) {
        User.find().then((users) => {
            resolve(users)
        }, (error) => {
            reject(error)
        })
    })
}

exports.edit = function(id, update) {
    return new Promise(function(resolve, reject) {
        User.findByIdAndUpdate({
            _id: id
        }, update, {
            new: true
        }).then((newUser) => {
            resolve(newUser)
        }, (error) => {
            reject(error)
        })
    })
}

exports.delete = function(id) {
    return new Promise(function(resolve, reject) {
        User.remove({
            _id: id
        }).then((result) => {
            resolve(result)
        }, (error) => {
            reject(error)
        })
    })
}