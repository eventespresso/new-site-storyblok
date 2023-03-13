import type { ReactNode } from 'react';
import type { SbBlokData as SbBlokDataType } from '@storyblok/react';
import type { ISbStoryData as ISbStoryDataType, ISbLinkURLObject } from 'storyblok-js-client';

export type SbBlokData = SbBlokDataType;

export interface ISbStoryData extends ISbStoryDataType {
	content: BlokProps;
}

export interface BlokProps extends SbBlokData {
	PrimaryHeaderNav: Array<BlokProps>;
}

export interface HeaderProps {
	blok: BlokProps;
}

export interface LayoutProps {
	children?: ReactNode;
	pageTitle?: string;
	story: ISbStoryData;
}

export interface NavLinkBlokProps extends SbBlokData {
	href: ISbLinkURLObject;
	aria_label: string;
	styles: string;
	text: string;
}

export interface NavLinkProps {
	blok: NavLinkBlokProps;
}

export interface StoryblokComponentProps {
	blok: SbBlokData;
	[key: string]: unknown;
}
