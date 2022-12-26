// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const assetsDirectory = path.join(process.cwd(), "public")
    const fileContens = await fs.readFile(assetsDirectory + '/publickey.asc', 'utf-8')
    res.status(200).send(fileContens)
}
