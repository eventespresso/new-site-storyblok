import React, { ReactNode } from 'react'
import Head from 'next/head';

import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
	children?: ReactNode
	pageTitle?: string
}

const Layout: React.FC<LayoutProps> = ({ children, pageTitle = 'Event Espresso' }) => {
	return (
		<>
			<Head>
				<title>{pageTitle}</title>
				<link rel='icon' href='/favicon.ico' />
				<link rel="stylesheet" href="https://fonts.cdnfonts.com/css/groupe" />
			</Head>
			<div className="flex flex-col h-80 justify-between font-content antialiased">
				<Header />
				{children}
				<Footer />
			</div>
		</>
	)
}

export default Layout
