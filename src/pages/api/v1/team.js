import {NextApiRequest, NextApiResponse} from "next";
const Database = require('../../../config/db');
export default async function handler(req=NextApiRequest, res=NextApiResponse) {
    const db = new Database();
    const team = req.body.team;
    await db.playerByTeam(team).then((result) => {
        res.status(200).json({data:result});
    });
}