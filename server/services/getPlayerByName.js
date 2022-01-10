const Player = require('../models/player')();
const { Op } = require("sequelize");
export default async ({name,offset,limit,order}) => await Player.findAll({
    where: {
        name: {
            [Op.substring]: name
        }
    },
    offset,
    limit,
    order: [
        ['name', order],
    ],
})