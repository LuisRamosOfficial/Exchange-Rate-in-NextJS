// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';



export default function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	res.status(200).json({
		GBP: {
			name: 'British Pound 🇬🇧',
			symbol: '£',
			rate: 0.8202,
		},
		USD: {
			name: 'US Dollar 🇺🇸',
			symbol: '$',
			rate: 1,
		},
		EUR: {
			name: 'Euro 🇪🇺',
			symbol: '€',
			rate: 0.9399,
		},
		STN: {
			name: 'STP Dobra 🇸🇹',
			symbol: '£',
			rate: 23.2635,
		},
		BRL: {
			name: 'Brazillean Real 🇧🇷',
			symbol: '£',
			rate: 5.3133,
		},
	});
}
