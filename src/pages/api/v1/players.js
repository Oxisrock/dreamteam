import {NextApiRequest, NextApiResponse} from "next";
const Database = require('../../../config/db');
export default async function getPlayerById(req=NextApiRequest, res=NextApiResponse) {
    const db = new Database();
    const options = req.query;
    await db.playerSeeder();
    await db.playerByName(options).then((result) => {
        res.status(200).json({data:result});
    });
}