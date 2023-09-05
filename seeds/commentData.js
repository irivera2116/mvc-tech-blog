const { Comment } = require('../models');

const commentData = [
    {
        comment_text: "Wow, this is a great post!",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "I agree!",
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: "I wonder what they'll do next?",
        user_id: 3,
        post_id: 1
    },
    {
        comment_text: "I can't wait to see what they do next!",
        user_id: 4,
        post_id: 1
    },
    {
        comment_text: "I'm so tired...",
        user_id: 5,
        post_id: 1
    },
    {
        comment_text: "You guys are nuts!",
        user_id: 3,
        post_id: 2
    },
    {
        comment_text: "I look forward to working with you guys!",
        user_id: 4,
        post_id: 2
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
