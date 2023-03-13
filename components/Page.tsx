import React from 'react'

import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

import type { SbBlokData } from "./types";

export const Page = ({ blok }) => (
	<main className='max-w-5xl mx-auto mb-auto px-5' {...storyblokEditable(blok)}>
		{blok.body.map((nestedBlok: SbBlokData) => (
			<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
		))}
	</main>
);
