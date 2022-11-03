const { Post } = require('../models');

const postData = [
    {
        title: 'Post1',
        content: 'Comment',
        user_id: 1
    },
    {
        title: 'Post2',
        content: 'Comment',
        user_id: 2
    },
    {
        title: 'Post3',
        content: 'Comment',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;