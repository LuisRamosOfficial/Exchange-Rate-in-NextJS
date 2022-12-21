import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/index.module.css';
import { FC, useEffect } from 'react';
import exchangePic from '../public/exchange.jpg';
import Aos from 'aos';
import { GetServerSideProps } from 'next';
import 'aos/dist/aos.css';
import CachedIcon from '@mui/icons-material/Cached';
import absoluteUrl from 'next-absolute-url';

export default function Home({ data }: any) {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);

	const Presentation: FC = () => {
		return (
			<div className={styles.presentation}>
				<div className={styles.imagewrapper}>
					<Image
						data-aos="flip-right"
						data-aos-duration="1000"
						data-aos-easing="ease-out"
						src={exchangePic}
						alt="Landscape picture"
						width={400}
						height={400}
					/>
				</div>
				<p
					data-aos="fade-right"
					data-aos-easing="ease-out"
					data-aos-duration="1000"
				>
					Money Converter with NextJS
				</p>
			</div>
		);
	};

	return (
		<main className={styles.main}>
			<Presentation />
			<ExchangingSection data={data} />
		</main>
	);
}

const ExchangingSection = ({ data }: any) => {

	console.log(data)
	return (
		<section className={styles.ExchangingSection}>
			<h1>Exchange Now!</h1>
			<div className={styles.BoxExchange}>
				<span>
					<p>From:</p>
					<select name={'currencys'}>
						<option value="volvo">Volvo</option>
						<option value="saab">Saab</option>
						<option value="opel">Opel</option>
						<option value="audi">Audi</option>
					</select>
				</span>
				<CachedIcon />
				<span>
					<p>To:</p>
					<select name={'currencys'}>
						<option value="volvo">Volvo</option>
						<option value="saab">Saab</option>
						<option value="opel">Opel</option>
						<option value="audi">Audi</option>
					</select>
				</span>
			</div>
		</section>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const url: any = context.req.client._httpMessage.req.rawHeaders[1];

	const res = await fetch('http://' +url + '/api/currency_list')
	const data = await res.json()

	return {
		props: {data},
	};
};

