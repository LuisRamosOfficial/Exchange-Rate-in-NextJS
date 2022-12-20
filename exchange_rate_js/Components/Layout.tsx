import Navbar from './Navbar';
import Meta from './Meta';
import {FC} from 'react';
import React from 'react'

interface props {
	children : React.ReactNode
}


const Layout: FC<props> = ({children}) => {
  return (
		<>
			<Meta />
			<Navbar />
			{children}
		</>
	);
}

export default Layout