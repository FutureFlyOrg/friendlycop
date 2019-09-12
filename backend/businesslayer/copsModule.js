const express = require('express');
const router = express.Router();
const dbUtil = require('../databaselayer/dbUtil');
const uuidv1 = require('uuid/v1');
const md5 = require('md5');

const collection = "CopsDetails";

let checkValidCop = username => {
    return dbUtil.findByCondition(collection, "username", username, '==')
}

router.get('/', (req, res) => {
    res.send('okokokok')
})

router.post('/', (req, res) => {
    let { name, username, password } = req.body;
    let id = uuidv1()
    let copDetails = {
        id,
        name,
        username,
        password: md5(password),
    }

    checkValidCop(username).then(({ empty = false }) => {
        if (empty) {
            dbUtil.insertData(collection, id, copDetails).then(data => {
                delete copDetails.password
                res.json({
                    status: 'success',
                    data: { ...copDetails }
                });
            }).catch(err => {
                res.json({
                    status: "error",
                    data: err
                })
            })
        }
        else {
            res.json({
                status: "error",
                data: `The Username of ${username} already existed, Try a different username.`
            })
        }
    }).catch(err => {
        res.json({
            status: "error",
            data: `The Username of ${username} already existed, Try a different username.`
        })
    })
})

router.post('/checkAvailability', (req, res) => {
    let { username } = req.body;
    checkValidCop(username).then(({ empty }) => {
        if (empty) {
            res.json({
                status: "success",
                data: `The Username of ${username} is available`
            })
        }
        else {
            res.json({
                status: "error",
                data: `The Username of ${username} already existed, Try a different username.`
            })
        }

    }).catch(err => {
        res.json({
            status: "error",
            data: `The Username of ${username} already existed, Try a different username.`
        })
    })
})

router.post('/login', (req, res) => {
    let { username, password } = req.body;
    checkValidCop(username).then(snapshot => {
        if (snapshot.empty) {
            res.json({
                status: 'error',
                data: 'Inalid Username'
            })
        }
        else {
            snapshot.forEach(doc => {
                let data = doc.data();
                if (data.password == md5(password)) {
                    delete data.password
                    res.json({
                        status: 'success',
                        data
                    })
                }
                else {
                    res.json({
                        status: 'error',
                        data: 'Inalid Password'
                    })
                }
            })
        }
    }).catch(err => {
        res.json({
            status: 'error',
            data: 'Something went wrong'
        })
    })
})

router.post('/compliants', (req, res) => {
    dbUtil.getAll('Compliants').then(snapshot => {
        res.json(snapshot)
    }).catch(err => {
        res.json({err})
    })
})

module.exports = router;