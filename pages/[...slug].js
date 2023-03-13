import { Layout } from '../components';

import { getStoryblokApi, StoryblokComponent, useStoryblokState } from '@storyblok/react';

export default function Page({ story }) {
	story = useStoryblokState(story);
	const pageTitle = story ? story.name : 'Event Espresso';

	return (
		<Layout pageTitle={pageTitle}>
			<StoryblokComponent blok={story.content} className='mb-auto text-3xl' />
		</Layout>
	);
}

export async function getStaticProps({ params }) {
	const storyblokApi = getStoryblokApi();
	let slug = params.slug ? params.slug.join('/') : 'home';

	let sbParams = {
		resolve_links: 'url',
		version: 'draft', // or 'published'
	};

	let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
	let { data: header_primary_nav } = await storyblokApi.get('cdn/stories/header-primary-navigation');

	return {
		props: {
			story: data ? data.story : false,
			key: data ? data.story.id : false,
			header_primary_nav: header_primary_nav ? header_primary_nav.story : false,
		},
		revalidate: 3600,
	};
}

export async function getStaticPaths() {
	const storyblokApi = getStoryblokApi();
	let { data } = await storyblokApi.get('cdn/links/');

	let paths = [];
	Object.keys(data.links).forEach((linkKey) => {
		if (data.links[linkKey].is_folder || data.links[linkKey].slug === 'home') {
			return;
		}

		const slug = data.links[linkKey].slug;
		let splittedSlug = slug.split('/');

		paths.push({ params: { slug: splittedSlug } });
	});

	return {
		paths: paths,
		fallback: false,
	};
}
