const { Post } = require('../models');

const postdata = [
    {
        title: 'Technology really is amazing!',
        post_data: 'Think about how much power we now have in the palm of our hands nowadays. All of the things that we take for granted until we lose or break our mobile phones. Technology is amazing!',
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
    },
    {
        title: 'Work from home or look elsewhere for work',
        post_data: 'Two and a half years after the COVID-19 pandemic and long after many employees have srealized that they can indeed do their jobs from home, the rug is being pulled from under then. There is now a mass exodus from companies that insist on returning to full time office work and many employees are leaving their current jobs for ones that offer partial or full remote work. Will the industry at large course correct? Only time will tell...',
        user_id: 4
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
