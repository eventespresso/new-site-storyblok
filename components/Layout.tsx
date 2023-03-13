import React from 'react'
import Head from 'next/head';

import { default as Footer } from './Footer';
import { default as Header } from './Header';

import type { LayoutProps } from "./types";


const Layout: React.FC<LayoutProps> = ({ children, pageTitle = 'Event Espresso', story }) => (
	<>
		<Head>
			<title>{pageTitle}</title>
			<link rel='icon' href='/favicon.ico' />
		</Head>
		<body className="flex flex-col h-80 justify-between font-content antialiased">
			<Header blok={story?.content} />
			{children}
			<Footer />
		</body>
	</>
);

export default Layout;
