import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/index.module.css';
import { FC, useEffect, useState } from 'react';
import exchangePic from '../public/exchange.jpg';
import RefreshPic from '../public/refresh-icon.webp';
import Aos from 'aos';
import { GetServerSideProps } from 'next';
import 'aos/dist/aos.css';
import React from 'react';

interface Props {
	children?: React.ReactNode;
	data: Object;
	names: Array<string>;
	acro: Array<string>;
}
interface Children {
	children: React.ReactNode;
}

const Home: FC<Props> = ({ data, names, acro }) => {
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
			<ExchangingSection data={data} names={names} acro={acro} />
		</main>
	);
};

const ExchangingSection: FC<Props> = ({ data, names, acro }: Props) => {
	const [Value, setValue] = useState<number>(0);
	const [Response, setResponse] = useState<number>(0);
	const [Lcurrency, setLcurrency] = useState<number>(0);
	const [Rcurrency, setRcurrency] = useState<number>(0);

	useEffect(() => {
		const Lrate = data[acro[Lcurrency ] as keyof typeof data]['rate' as keyof typeof data]
		const Rrate = data[acro[Rcurrency ] as keyof typeof data]['rate' as keyof typeof data]
		const calculation = (Value * Number(Rrate)) / Number(Lrate)
		setResponse(Math.round((calculation + Number.EPSILON) * 10000) / 10000);
	

	}, [Value, Lcurrency, Rcurrency, acro, data])
	

	const SwitchButton: FC = () => {

		const Switch = () => {
			let R: number = Rcurrency;
			let L: number = Lcurrency;

			setLcurrency(R)
			setRcurrency(L)
		}
		return (
			<button onClick={() => Switch()} className={styles.switchButton}>
				<div className={styles.imagewrapper}>
					<Image
						src={RefreshPic}
						alt="Landscape picture"
						width={50}
						height={50}
					/>
				</div>
			</button>
		);
	};

	return (
		<section className={styles.ExchangingSection}>
			<h1>Exchange Now!</h1>
			<div className={styles.BoxExchange}>
				<span>
					<p>From:</p>
					<select
						value={Lcurrency}
						onChange={(e) => {
							setLcurrency(parseInt(e.target.value));
						}}
						name={'currencys'}
					>
						{names.map((element, index) => (
							<option key={element} value={index}>
								{element}
							</option>
						))}
					</select>
				</span>
				<SwitchButton />
				<span>
					<p>To:</p>
					<select
						value={Rcurrency}
						onChange={(e) => {
							setRcurrency(parseInt(e.target.value));
						}}
						name={'currencys'}
					>
						{names.map((element, index) => (
							<option key={element} value={index}>
								{element}
							</option>
						))}
					</select>
				</span>
				<input
					type="number"
					onChange={(e) => {
						setValue(parseFloat(e.target.value));
					}}
				/>
				<input
					type="number"
					value={Response}
					disabled
					className={styles.disabled}
				/>
				{/* <input /> */}
			</div>
		</section>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const res = await fetch('http://localhost:3000/api/currency_list');
	const data = await res.json();


	const res_acro = await fetch('http://localhost:3000/api/currency_list/acronyms');
	const acro = await res_acro.json();
	let names = [];

	for (const key in data) {
		names.push(data[key].name);
	}

	return {
		props: { data, names, acro },
	};
};

export default Home;
