import type { NextApiRequest, NextApiResponse } from 'next';

// test
export default function handler(req: NextApiRequest, res: NextApiResponse) {
	res.status(200).json(['GBP', 'USD', 'EUR', 'STN', 'BRL']);
}
