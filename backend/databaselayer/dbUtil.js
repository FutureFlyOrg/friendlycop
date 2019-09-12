
const firebase = require("firebase-admin");
const serviceAccount = require("./firebaseKey.json");
var db = "";

module.exports.establishConnection = function(){
    return new Promise((resolve, reject) => {
        try{
            firebase.initializeApp({
                credential: firebase.credential.cert(serviceAccount),
                //databaseURL: "https://friendlycop-4981d.firebaseio.com"
            });
            db = firebase.firestore();
            resolve("Successfully Connected to database");
        }
        catch(error){
            reject("Error While Connecting to database. Error - " + error);
        }
    });   
}

module.exports.findByCondition = function(collectionName, keyname, value, condition){
    return new Promise((resolve, reject) => {
        let collection = db.collection(collectionName);
        collection.where(keyname, condition, value).get().then((data) => {
            resolve(data);
        });
    });
}

module.exports.insertData = function(collectionName, id, insertObject){
    return new Promise((resolve, reject) => {
        try{
            db.collection(collectionName).doc(id).set(insertObject).then((res) => {
                resolve("inserted");
            }).catch((err) => {
                reject(err);
            });
        }
        catch(err){
            reject("Error while inserting data into " + collectionName + " Error " + err);
        }        
    });
}

module.exports.updateData = function(collectionName, query, updateObject){
    return new Promise((resolve, reject) => {
        try{
            let collection = db.collection(collectionName);
            collection.doc(query).update(updateObject, (error) => {
                if(error){
                    reject(error);
                }
                else{
                    resolve("Updated Successfully");
                }
            });
        }
        catch(err){
            reject("Error while updating data into " + collectionName + " Error " + err);
        } 
    });
}

module.exports.createData = function(collectionName, insertObject){
    return new Promise((resolve, reject) => {
        try{
            db.collection(collectionName).add(insertObject).then((res) => {
                resolve("inserted");
            }).catch((err) => {
                reject(err);
            });
        }
        catch(err){
            reject("Error while inserting data into " + collectionName + " Error " + err);
        }        
    });
}

module.exports.findAll = function(collectionName){
    return new Promise((resolve, reject) => {
        try{
            let collection = db.ref(collectionName);
            collection.once("value", (data) => {
                resolve(data.val());
            });
        }
        catch(err){
            reject("Error while fetching data from " + collectionName + " Error " + err);
        }
    });
}

module.exports.getAll = collection => {
    return new Promise((resolve,reject) => {
        try {
            db.collection(collection)
                .get()
                .then(snapshot => snapshot.docs.map(doc => doc.data()))
                .then(res => resolve(res))
                .catch(err => reject(err))
        }
        catch (err) {
            reject(err)
        }
    })
}

module.exports.db = db;