import { SbBlokData, storyblokEditable } from "@storyblok/react";

import Link from 'next/link'
import React from 'react'

type Href = {
	cached_url: string;
}

interface LinkProps extends SbBlokData {
	href: Href
	aria_label: string;
	styles: string;
	text: string;
}

interface BlokProps {
	blok: LinkProps;
}

const NavLink: React.FC<BlokProps> = ({ blok }) => {
	const styles = "text-white hover:bg-slate-800 py-0.5 px-2 rounded-sm mx-1 transition duration-200 " + blok.styles;
	return (
		<Link href={blok.href.cached_url} {...storyblokEditable(blok)}>
			<a className={styles} aria-label={blok.aria_label}>
				{blok.text}
			</a>
		</Link>
	);
}
export default NavLink
