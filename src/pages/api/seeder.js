import {NextApiRequest, NextApiResponse} from "next";
const Database = require('../../config/db');
export default async function handler(req=NextApiRequest, res=NextApiResponse) {
    const db = new Database();
    await db.playerSeeder(3);
    res.status(200).json({ text: 'Hello' });
}