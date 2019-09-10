const dbUtil = require("./backend/databaselayer/dbUtil");

dbUtil.establishConnection().then((data, err) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }    
});

require('./backend/server.js');

