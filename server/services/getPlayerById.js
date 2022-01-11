const Player = require('../models/player')();
export default async (id) => await Player.findAll({
    where: {
        id
    },
})