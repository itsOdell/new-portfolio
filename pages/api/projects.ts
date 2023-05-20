import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import {projects} from "../../data/projects";

const handler: NextApiHandler = (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == "GET") {
        res.json(projects)
    }
}

export default handler