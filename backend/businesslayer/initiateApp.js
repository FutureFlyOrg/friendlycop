const dbUtil = require('../databaselayer/dbUtil')

module.exports.login = (req, res) => {
    dbUtil.findByCondition("UserDetails",  "username", req.body.username, "==").then((data) => {
        if(data.empty){
            res.send({"message": "Invaild Username"})
        }
        else{
            data.forEach(doc => {
                let user =  doc.data();
                if(user.password == req.body.password){
                    res.send({"message": "valid"});
                }
                else{
                    res.send({"message": "Invalid Password"})
                }
            });
        }
    });
}

module.exports.register = (req, res) => {
    let userdetails = {
        "username": req.body.username,
        "password": req.body.password
    }
    dbUtil.insertData("UserDetails", req.body.username, userdetails).then((data) => {
        res.send({"message": "Success", "id": req.body.username});
    });
}

module.exports.checkUsernameAvailability = (req, res) => {
    dbUtil.findByCondition("UserDetails", "username", req.body.username, "==").then((data) => {
        if(data.empty){
            res.send("Available")
        }
        else{
            res.send("Not Available");
        }
    })
}