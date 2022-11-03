const { User } = require('../models');

const userData = [
    {
        username: 'olesia1',
        password: 'password'
    },
    {
        username: 'olesiachugaieva',
        password: 'password'
    },
];

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true
});

module.exports = seedUsers;