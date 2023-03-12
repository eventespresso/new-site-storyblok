import React, { ReactNode } from 'react'
import Head from 'next/head';

import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
	children?: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Head>
				<title>Event Espresso</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className="flex flex-col h-screen justify-between font-content antialiased">
				<Header />
				<main className="mb-auto">{children}</main>
				<Footer />
			</div>
		</>
	)
}

export default Layout
