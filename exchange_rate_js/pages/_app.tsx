import type { AppProps } from 'next/app';
import Layout from '../Components/Layout';
import '../styles/global.css'


export default function App({ Component, pageProps }: AppProps) {
	return (
		<Layout>
		<Component {...pageProps} />;
		</Layout>
	)
}
