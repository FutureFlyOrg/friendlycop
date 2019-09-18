const express = require('express');
const router = express.Router();
const dbUtil = require('../databaselayer/dbUtil');
const uuidv1 = require('uuid/v1');
const md5 = require('md5');
const axios = require('axios');
const { bindRes } = require('./utility');

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
    let errMsg = `The Username of ${username} already existed, Try a different username.`;
    checkValidCop(username).then(({ empty = false }) => {
        if (empty) {
            dbUtil.insertData(collection, id, copDetails).then(data => {
                delete copDetails.password
                bindRes(false, copDetails, res);
            }).catch(err => {
                bindRes(true, err, res)
            })
        }
        else {
            bindRes(true, errMsg, res)
        }
    }).catch(err => {
        bindRes(true, errMsg, res)
    })
})

router.post('/checkAvailability', (req, res) => {
    let { username } = req.body;
    let errMsg = `The Username of ${username} already existed, Try a different username.`;
    checkValidCop(username).then(({ empty }) => {
        if (empty) {
            let msg = `The Username of ${username} is available`
            bindRes(false, msg, res);
        }
        else {
            bindRes(true, errMsg, res);
        }

    }).catch(err => {

        bindRes(true, errMsg, res);
    })
})

router.post('/login', (req, res) => {
    let { username, password } = req.body;
    checkValidCop(username).then(snapshot => {
        if (snapshot.empty) {
            bindRes(true, 'Inalid Username', res);
        }
        else {
            snapshot.forEach(doc => {
                let data = doc.data();
                if (data.password == md5(password)) {
                    delete data.password
                    bindRes(false, data, res);
                }
                else {
                    bindRes(true, 'Inalid Password', res);
                }
            })
        }
    }).catch(err => bindRes(true, err, res))
})

router.post('/compliants', (req, res) => {
    let { token = 'none' } = req.body;
    axios.all([
        dbUtil.findByCondition('Compliants', 'status', 'QUEUE', '=='),
        dbUtil.findByCondition('Compliants', 'actionBy', token, '=='),
    ]).then(results => {
        let [res1, res2] = results;
        let finalResult = [];
        if (!res1.empty) {
            res1.forEach(doc => finalResult.push({ id: doc.id, ...doc.data() }))
        }
        if (!res2.empty) {
            res2.forEach(doc => finalResult.push({ id: doc.id, ...doc.data() }))
        }
        bindRes(false, finalResult, res);
    }).catch(err => bindRes(true, err, res))
})

router.post('/changeStatus/:id', (req, res) => {
    let { id } = req.params;
    let { status, actionBy } = req.body;
    dbUtil.updateData('Compliants', `${id}`, { status, actionBy }).then(result => {
        let msg = "Updated successfully";
        bindRes(false, msg, res);
    }).catch(err => {
        bindRes(true, err, res)
    })
})

module.exports = router;