import { NextApiRequest, NextApiResponse } from "next";
import getPlayerByTeam from "../../../../server/services/getPlayerByTeam";

export default async (req = NextApiRequest, res = NextApiResponse) => {
    const team = await req.body.team;
    let page = (req.query.page) ? Number(req.query.page) : 1;
    let pageItems = (req.query.pageitems) ? Number(req.query.pageitems) : 100;
    const order = await (req.query.order) ? req.query.order : 'asc';
    const result = await getPlayerByTeam({team,offset:page,limit:pageItems,order});
    res.status(200).json({ data: result });
}