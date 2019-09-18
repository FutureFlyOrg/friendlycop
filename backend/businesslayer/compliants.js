const dbUtil = require('../databaselayer/dbUtil');
const firebase = require("firebase-admin");
const uuidv1 = require('uuid/v1');

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
        let { image:imgBase64, comments, username } = req.body;
        compDetails = {
            comments,
            username,
            location: new firebase.firestore.GeoPoint(12.98432, 80.25894),
            datetime: new Date(),
            status: "QUEUE",
            actionBy: ""
        }
        let path = `images/`;
        let name = `${username}-${(Math.random()*100000000000000000).toString(36)}.jpg`
        dbUtil.uploadFile(imgBase64, path, name).then(image => {
            compDetails['image'] = image;
            dbUtil.insertData("Compliants", compDetails).then(id => {
                res.status(200).send({
                    status: 'success',
                    data: { id, ...compDetails }
                })
            }).catch(err => {
                console.log(err);
                res.status(500).send({ "data": "error", "details": "unable to create " });
            });
        })

    }
    catch(error){
        console.log(error);
        res.status(500).send({"data": "error", "details": "unable to create "});
    }
}