const dbUtil = require('../databaselayer/dbUtil');
const firebase = require("firebase-admin");

module.exports.getCompliantsByUsername = function(req, res){
    try{
        dbUtil.findByCondition("Compliants", "username", req.body.username, "==").then((data) => {
            if(data.empty){
                res.status(200).send({"data": "success", "details": []})
            }
            else{
                let complaints = [];
                data.forEach(doc => {
                    let complaint =  doc.data();
                    complaints.push(complaint);
                });
                res.status(200).send({"data": "success", "details": complaints})
            }
        }).catch(err => {
            console.log(err);
            res.status(500).send({"data": "error"})
        });
    }
    catch(error){
        console.log(error);
        res.status(500).send({"data": "error"})
    }
}

/** QUEUE
 * ACTION_TAKEN
 * IN_PROGRESS
 * COMPLETED
 */

module.exports.createCompliant = function(req, res){
    try{
        let compDetails = {
            "image": req.body.image,
            "comments": req.body.comments,
            "username": req.body.username,
            "location": req.body.location,
            "datetime": new Date(),
            "status": "QUEUE"
        }
        dbUtil.createData("Compliants", compDetails).then(data => {
            res.status(200).send({"data": "success", "details": data.id})
        }).catch(err => {
            console.log(err);
            res.status(500).send({"data": "error", "details": "unable to create "});
        });
    }
    catch(error){
        console.log(error);
        res.status(500).send({"data": "error", "details": "unable to create "});
    }
}