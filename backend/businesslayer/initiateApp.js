const dbUtil = require('../databaselayer/dbUtil');
const utility = require('./utility');

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
    try{
        dbUtil.findByCondition("UserDetails", "username", req.body.username, "==").then((data) => {
            if(data.empty){
                res.status(200).send({data: "success", id: req.body.username });
            }
            else{
                getSuggestions(req.body.username).then((names) => {
                    res.status(200).send({data: "exists", id: names });
                })
                
            }
        }).catch(err => {
            console.log(err);
            res.status(500).send({data: "error"});
        });
    }
    catch(error){
        console.log("Error in checkUsernameAvailability method. Error: " + error);
        res.status(500).send({data: "error"});
    }    
}

async function getSuggestions(username){
    let names = [];
    while(names.length < 3){
        let suggname = await utility.Suggestions(username);
        let data = await checkInDB(suggname);
        if(data.empty){
            names.push(suggname);
        }
        if(names.length == 3){
            break;
        }
    }
    return names;
}

function checkInDB(name){
    return new Promise((resolve, reject) => {
        try{
            dbUtil.findByCondition("UserDetails", "username", name, "==").then(data=>{
                resolve(data);
           }).catch(err => {
               console.log(err);
           });
        }
        catch(error){
            console.log(error);
        }
              
    });
}