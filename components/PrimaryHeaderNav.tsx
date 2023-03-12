import { SbBlokData, storyblokEditable, StoryblokComponent } from "@storyblok/react";

import React from 'react'

export const PrimaryHeaderNav = ({ blok }) => (
	<div className="sm:ml-8 flex justify-around text-center" {...storyblokEditable({ blok })}>
		{blok.links.map((nestedBlok: SbBlokData) => (
			<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
		))}
	</div>
)
