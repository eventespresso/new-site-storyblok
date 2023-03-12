import {Layout} from '../components';

import { getStoryblokApi, StoryblokComponent, useStoryblokState } from '@storyblok/react';

export default function Home({ story }) {
	story = useStoryblokState(story);
	const pageTitle = story ? story.name : 'Event Espresso';
	return (
		<Layout pageTitle={pageTitle}>
			<StoryblokComponent blok={story.content} className='mb-auto text-3xl' />
		</Layout>
	);
}


export async function getStaticProps() {
	// home is the default slug for the homepage in Storyblok
	let slug = 'home';

	// load the draft version
	let sbParams = {
		version: 'draft', // or 'published'
	};

	const storyblokApi = getStoryblokApi();
	let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

	return {
		props: {
			story: data ? data.story : false,
			key: data ? data.story.id : false,
		},
		revalidate: 3600, // revalidate every hour
	};
}
