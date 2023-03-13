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
	console.log(data);
	let { data: config } = await storyblokApi.get('cdn/stories/PrimaryHeaderNav');

	return {
		props: {
			story: data ? data.story : false,
			key: data ? data.story.id : false,
			config: config ? config.story : false,
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
