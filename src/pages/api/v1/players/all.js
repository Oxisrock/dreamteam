import { NextApiRequest, NextApiResponse } from "next";
import getPlayerAll from "../../../../../server/services/getPlayerAll";

export default async (req = NextApiRequest, res = NextApiResponse) => {
    let result = {};
    let page = (req.query.page) ? Number(req.query.page) : 1;
    let pageItems = (req.query.pageitems) ? Number(req.query.pageitems) : 10;
    const order = await (req.query.order) ? req.query.order : 'asc';
    result = await getPlayerAll({offset: page, limit: pageItems, order });
    res.status(200).json({ data: result });
}