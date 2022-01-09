'use strict';
const axios = require('axios');
const Player = require('../models/player')();
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { data } = await axios.get('https://www.easports.com/fifa/ultimate-team/api/fut/item');
    let currentPage = 1;
    let playerCollection = [];
    while (currentPage <= data.totalPages) {
      const { data } = await axios.get('https://www.easports.com/fifa/ultimate-team/api/fut/item', {
        params: {
          page: currentPage
        }
      });
      const playersFormated = await data.items.map(({ baseId, name, position, nation, club }) => ({
        id: baseId,
        name,
        position,
        country: nation.name,
        team: club.name
      }));
      const playersFormatedPromise = playersFormated.map(async (item) =>
        await Player.findOrCreate({
          where: { id: item.id },
          defaults: item
        })
      );
      const playersCollection = await Promise.all(playersFormatedPromise);

      console.log(playersCollection);
      
      currentPage++;
    }

    return;

    const playersFormatedPromise = playersFormated.map(async (item) =>
      await Player.findOrCreate({
        where: { id: item.id },
        defaults: item
      })
    );
    const playersCollection = await Promise.all(playersFormatedPromise);

    console.log(playersCollection);

    return;
    /*
    await queryInterface.bulkInsert('Players', [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'example@example.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);*/
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Players', null, {});
  }
};
