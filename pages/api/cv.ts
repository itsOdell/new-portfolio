import fs from 'fs';
import path from 'path';
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const handler: NextApiHandler = (req: NextApiRequest, res: NextApiResponse) => {
    const filePath = path.join(process.cwd(), `/public/cv.pdf`);
    try {
      const imageBuffer = fs.readFileSync(filePath);
      res.setHeader('Content-Type', 'image/pdf');
      res.send(imageBuffer);
    } catch (e) {
      res.status(400).json({ error: true, message: 'Image not found' });
    }
}

export default handler