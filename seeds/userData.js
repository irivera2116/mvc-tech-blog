const { User }  = require('../models');

const userData = [
    {
        username: "Big-E",
        password: "password123",
        email: "thisguyE@gmail.com"
    },
    {
        username: "Jedi_Master",
        password: "MayTheForceBeWithYou",
        email: "jedi_padawan@padawan.com"
    },
    {
        username: "Trekkie",
        password: "LiveLongAndProsper",
        email: "StarTrek45@yahoo.com"
    },
    {
        username: "Handlebars",
        password: "Handlebars123",
        email: "theMoustacheGuy@example.com"
    },
    {
        username: "Express",
        password: "Express123",
        email: "Expressgal@example.com"
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
