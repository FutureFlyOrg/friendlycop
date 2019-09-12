function generateRandomString(){
    let random_string = '';
    let random_ascii;
    for(let i = 0; i < 3; i++) {
        random_ascii = Math.floor((Math.random() * 25) + 97);
        random_string += String.fromCharCode(random_ascii)
    }
    return random_string;
}


module.exports.Suggestions = function(username){
    return new Promise((resolve, reject) => {
        let usernameLen = username.length;
        if(usernameLen < 15 || usernameLen > 10){
            let name = username.substring(0,10);
            let totallen = 15 - (name.length + 3);
            let currenttime = new Date().getTime();
            let number = currenttime.toString().slice(totallen * -1)
            let suggname =  name + number + generateRandomString();
            console.log(suggname);
            resolve(suggname);
        }
        else if(usernameLen <= 10 ){
            let totallen = 15 - (usernameLen + 3)
            let currenttime = new Date().getTime();
            let number = currenttime.toString().slice(totallen * -1)
            let suggname =  username + number + generateRandomString();
            console.log(suggname);
            resolve(suggname);
        } 
        else{
            console.log("nothing")
        } 
    })      
}

