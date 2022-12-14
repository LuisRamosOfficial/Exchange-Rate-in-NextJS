// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';



export default function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	res.status(200).json({
		GBP: {
			name: 'British Pound π¬π§',
			symbol: 'Β£',
			rate: 0.8202,
		},
		USD: {
			name: 'US Dollar πΊπΈ',
			symbol: '$',
			rate: 1,
		},
		EUR: {
			name: 'Euro πͺπΊ',
			symbol: 'β¬',
			rate: 0.9399,
		},
		STN: {
			name: 'STP Dobra πΈπΉ',
			symbol: 'Β£',
			rate: 23.2635,
		},
		BRL: {
			name: 'Brazillean Real π§π·',
			symbol: 'Β£',
			rate: 5.3133,
		},
	});
}
