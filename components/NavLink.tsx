import Link from 'next/link'
import React from 'react'

import { storyblokEditable } from "@storyblok/react";

import type { NavLinkProps } from "./types";


export const NavLink: React.FC<NavLinkProps> = ({ blok }) => {
	const styles = "text-white hover:bg-slate-800 py-0.5 px-2 rounded-sm mx-1 transition duration-200 " + blok.styles;
	return (
		<Link href={blok.href.url} {...storyblokEditable(blok)}>
			<a className={styles} aria-label={blok.aria_label}>
				{blok.text}
			</a>
		</Link>
	);
}
