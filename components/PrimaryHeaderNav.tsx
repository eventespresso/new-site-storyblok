import React from 'react'

import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

import type { SbBlokData } from "./types";

export const PrimaryHeaderNav = ({ blok }) => (
	<div className="sm:ml-8 flex justify-around text-center" {...storyblokEditable({ blok })}>
		{blok.links.map((nestedBlok: SbBlokData) => (
			<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
		))}
	</div>
)
