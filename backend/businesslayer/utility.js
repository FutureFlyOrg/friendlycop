module.exports.generateRandomString = function(){
    let random_string = '';
    let random_ascii;
    for(let i = 0; i < 3; i++) {
        random_ascii = Math.floor((Math.random() * 25) + 97);
        random_string += String.fromCharCode(random_ascii)
    }
    return random_string;
}

let username = "suganya";
let len = username.length;
console.log(len);
let ran = Math.random();
console.log(ran);
let num = Math.floor(ran*100000);
console.log(num);

module.exports.Suggestions = function(username){
    let usernameLen = username.length;
    if(usernameLen < 15 && usernameLen > 10){

    }
    else if(usernameLen <= 10 ){
        let totallen = 15 - (usernameLen + 3)
        let currenttime = new Date().getTime();
        let number = currenttime%1000;
    }
    
}