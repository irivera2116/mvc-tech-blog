// Import the seeds data
const seedUsers = require('./userData');
const seedPosts = require('./postData');
const seedComments = require('./commentData');

// Import sequelize connection
const sequelize = require('../config/connection');

// Function to seed data
const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedPosts();
    await seedComments();

    process.exit(0);
};

seedAll();
