import { NextApiRequest, NextApiResponse } from "next";
import getPlayerByName from "../../../../server/services/getPlayerByName";

export default async (req = NextApiRequest, res = NextApiResponse) => {
    let result = {};
    let page = (req.query.page) ? Number(req.query.page) : 1;
    let pageItems = (req.query.pageitems) ? Number(req.query.pageitems) : 10;
    const order = await (req.query.order) ? req.query.order : 'asc';
    if (req.query.search !== undefined) {
        const name = await req.query.search;
        result = await getPlayerByName({ name, offset: page, limit: pageItems, order });
    } else {
        result = await getPlayerByName({offset: page, limit: pageItems, order });
    }
    res.status(200).json({ data: result });
}