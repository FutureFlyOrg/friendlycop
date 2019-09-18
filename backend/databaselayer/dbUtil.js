
const firebase = require("firebase-admin");
const serviceAccount = require("./firebaseKey.json");
const uuidv1 = require('uuid/v1');
var db = "";
var storage;
let ref;

module.exports.establishConnection = function () {
    return new Promise((resolve, reject) => {
        try {
            firebase.initializeApp({
                credential: firebase.credential.cert(serviceAccount),
                //databaseURL: "https://friendlycop-4981d.firebaseio.com"
            });
            db = firebase.firestore();
            storage = firebase.storage().bucket("friendlycop-4981d.appspot.com")
            // storage = firebase.storage();
            // const storage = gcloud.storage({
            //     projectId: 'friendlycop-4981d',
            //     keyFilename: './firebaseKey.json',
            // });

            // const bucket = storage.bucket('friendlycop-4981d.appspot.com');

            resolve("Successfully Connected to database");
        }
        catch (error) {
            reject("Error While Connecting to database. Error - " + error);
        }
    });
}

module.exports.findByCondition = function (collectionName, keyname, value, condition) {
    return new Promise((resolve, reject) => {
        let collection = db.collection(collectionName);
        collection.where(keyname, condition, value).get().then((data) => {
            resolve(data);
        });
    });
}

module.exports.insertData = function (collectionName, insertObject) {
    return new Promise((resolve, reject) => {
        try {
            let id = uuidv1();
            db.collection(collectionName).doc(id).set({ id, ...insertObject }).then((res) => {
                console.log(res)
                resolve(id);
            }).catch((err) => {
                reject(err);
            });
        }
        catch (err) {
            reject("Error while inserting data into " + collectionName + " Error " + err);
        }
    });
}

module.exports.updateData = function (collectionName, query, updateObject) {
    return new Promise((resolve, reject) => {
        try {
            let collection = db.collection(collectionName);
            collection.doc(query)
                .update(updateObject)
                .then(res => resolve(res))
                .catch(err => reject(err))
        }
        catch (err) {
            reject("Error while updating data into " + collectionName + " Error " + err);
        }
    });
}

module.exports.createData = function (collectionName, insertObject) {
    return new Promise((resolve, reject) => {
        try {
            db.collection(collectionName).add(insertObject).then((res) => {
                resolve("inserted");
            }).catch((err) => {
                reject(err);
            });
        }
        catch (err) {
            reject("Error while inserting data into " + collectionName + " Error " + err);
        }
    });
}

module.exports.findAll = function (collectionName) {
    return new Promise((resolve, reject) => {
        try {
            let collection = db.ref(collectionName);
            collection.once("value", (data) => {
                resolve(data.val());
            });
        }
        catch (err) {
            reject("Error while fetching data from " + collectionName + " Error " + err);
        }
    });
}

module.exports.getAll = collection => {
    return new Promise((resolve, reject) => {
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

module.exports.uploadFile = (file,path,name) => {
    return new Promise((resolve, reject) => {
        try {
            let id= uuidv1();
            let fileRef = storage.file(path+name);
            var buf = Buffer.from(file, 'base64');
            fileRef.save(buf, {
                metadata: {
                    contentType: 'image/jpeg',
                    metadata: {
                        firebaseStorageDownloadTokens:id,
                        custom: 'metadata'
                    },
                    public: true,
                    validation: 'md5'
                },
            }).then(res => {
                let url = `https://firebasestorage.googleapis.com/v0/b/friendlycop-4981d.appspot.com/o/${encodeURIComponent(path+name)}?alt=media&token=${id}`;
                resolve(url)
            }).catch(err => {
                reject(err)
            })
            // storage.ref('/images').child('crime.jpg').putString(file, 'base64', { contentType: 'image/jpg' }).then(snapshot => {
            //     console.log('file upload successfully')
            //     resolve(snapshot);
            // })
        }
        catch (err) {
            console.log({ err })
            reject(err)
        }
    })
}

module.exports.db = db;

