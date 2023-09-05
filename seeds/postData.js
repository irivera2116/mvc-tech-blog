const { Post } = require('../models');

const postData = [
    {
        title: "RPG's are better than FPS's",
        post_content: "RPG's are generally better than FPS's giving the player the ability to explore their own world and make their own decisions.",
        user_id: 1
    },
    {
        title: "SCI-FI vs. FANTASY",
        post_content: "Fantasy games and Sci-Fi games are both great, but I prefer sci-fi games because they allow you to escape from the restrictions of reality.",
        user_id: 2
    },
    {
        title: "Star Wars or Star Trek?",
        post_content: "Star Wars, for me is generally best. I like the idea of the force and the Jedi. Star Trek is also great, but I prefer Star Wars.",
        user_id: 3
    },
    {
        title: "Handlebars",
        post_content: "Handlebars is a very useful npm package!",
        user_id: 4
    },
    {
        title: "Express.js",
        post_content: "Express.js is a very useful npm package!",
        user_id: 5
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
