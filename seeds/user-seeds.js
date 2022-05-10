const { User } = require('../models');

const userdata = [
    {
        username: 'faceless',
        email: 'faceless@bad.co',
        password: 'pass1234'
    },
    {
        username: 'somedude',
        email: 'somedude@bad.co',
        password: 'pass1234'
    },
    {
        username: 'techdiva',
        email: 'techdiva@bad.co',
        password: 'pass1234'
    }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true, returning: true });

module.exports = seedUsers;
