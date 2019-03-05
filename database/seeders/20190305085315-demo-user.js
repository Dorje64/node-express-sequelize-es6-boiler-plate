'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
    first_name: 'Torchi',
    last_name: 'Rokaya',
    username: 'torchi@medusa.com',
    password: 'abcd',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    first_name: 'Hilson',
    last_name: 'Shrestha',
    username: 'hilson@medusa.com',
    password: 'abcd',
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    first_name: 'Dinesh',
    last_name: 'Adhikari',
    username: 'dinesh@medusa.com',
    password: 'abcd',
    createdAt: new Date(),
    updatedAt: new Date()
  }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
