import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/index.module.css'
import { FC, useEffect } from 'react';
import exchangePic from '../public/exchange.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';



export default function Home() {


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
  }
  

  return (
    <main className={styles.main}>
      <Presentation />
    </main>
  )
}

