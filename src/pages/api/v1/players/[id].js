import { NextApiRequest, NextApiResponse } from "next";
import getPlayerById from "../../../../../server/services/getPlayerById";

export default async (req = NextApiRequest, res = NextApiResponse) => {
    let result = {};
    const {id} = req.query;
    result = await getPlayerById(id);
   
    res.status(200).json({ data: result[0] });
}