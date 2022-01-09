import { NextApiRequest, NextApiResponse } from "next";
const { Op } = require("sequelize");
const Player = require('../../../../server/models/player')();
export default async function getPlayerById(req = NextApiRequest, res = NextApiResponse) {
    let result = {};
    let page = (req.query.page) ? Number(req.query.page) : 1;
    let pageItems = (req.query.pageitems) ? Number(req.query.pageitems) : 10;
    const order = await (req.query.order) ? req.query.order : 'asc';
    if (req.query.name !== undefined) {
        const name = await req.query.name;
        result = await Player.findAll({
            where: {
                name: {
                    [Op.substring]: name
                }
            },
            offset: page,
            limit: pageItems,
            order: [
                ['name', order],
            ],
        });
    } else {
        console.log('entro >');
        result = await Player.findAll({
            offset: page,
            limit: pageItems,
            order: [
                ['name', order],
            ],
        });
    }
    res.status(200).json({ data: result });
}