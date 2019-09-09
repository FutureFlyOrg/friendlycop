const dbUtil = require('../databaselayer/dbUtil')

module.exports.login = (req, res) => {

}

module.exports.register = (req, res) => {
    
}

module.exports.checkUsernameAvailability = (req, res) => {
    dbUtil.findByCondition("UserDetails", "username", "1003", "==").then((data) => {
        if(data.empty){
            res.send("Available")
        }
        else{
            res.send("Not Available");
        }
    })
}