// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import {skills} from "../../data/skills"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "GET") {
    res.json(skills)
  }
}
