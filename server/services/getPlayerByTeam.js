const Player = require('../models/player')();
const { Op } = require("sequelize");

export default async ({team,offset,limit,order}) => await Player.findAll({
    where: {
        team: {
            [Op.substring]: team
        }
    },
    offset,
    limit,
    order: [
        ['name', order],
    ],
});