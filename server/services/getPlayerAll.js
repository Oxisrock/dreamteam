const Player = require('../models/player')();
export default async ({offset,limit,order}) => await Player.findAll({
    offset,
    limit,
})