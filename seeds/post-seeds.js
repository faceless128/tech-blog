const { Post } = require('../models');

const postdata = [
    {
        title: 'Technology really is amazing!',
        post_data: 'hink about how much power we now have in the palm of our hands nowadays. All of the things that we take for granted until we lose or break our mobile phones. Technology is amazing!',
        user_id: 1
    },
    {
        title: 'EV Competition is heating up!',
        post_data: 'The Kia EV6 recently won the 2022 Car of the Year in Europe and the Lucid Air and Rivian R1T have also gotten some stellar reviews. This is no longer looking like a one horse (Tesla) race. That is great for consumers and the environment.',
        user_id: 2
    },
    {
        title: 'Folding Phones are only getting better',
        post_data: 'Samsung and Motorola have been killing the game for years and their newly uncovered devices only raise the bar. Google and Apple are rumored to be digging deep into this area, and some Google branded prototypes have been spotted recently. Their camera components are catching up to flagships and battery life is will be the next domino to fall in the wake of their progress. Are you as excited as I am???',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
