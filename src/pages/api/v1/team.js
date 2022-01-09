import { NextApiRequest, NextApiResponse } from "next";
const { Op } = require("sequelize");

const Player = require('../../../../server/models/player')();
export default async function handler(req = NextApiRequest, res = NextApiResponse) {
    const team = await req.body.team;
    const result = await Player.findAll({
        where: {
            team: {
                [Op.substring]: team
            }
        }
    });
    res.status(200).json({ data: result });
}