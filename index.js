const userInfo = require('./information');

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `${userInfo.prenom} ${userInfo.campus}`,
}));