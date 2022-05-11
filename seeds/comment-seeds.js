const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'The level of technology available to us today truly is amazing.',
        user_id: 4,
        post_id: 1
    },
    {
        comment_text: 'I cannot wait for the F150 Lightning!!! ',
        user_id: 1,
        post_id: 2
    },
    {
        comment_text: 'Should be amazing!!!',
        user_id: 3,
        post_id: 2
    },
    {
        comment_text: 'What happened to the new Roadster?',
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: 'Realistically, I want to see the inside of an offoce building once a season',
        user_id: 3,
        post_id: 4
    },
    {
        comment_text: 'Amen! Preach On!!!',
        user_id: 2,
        post_id: 4
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;