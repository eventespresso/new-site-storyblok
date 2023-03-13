import { apiPlugin, getStoryblokApi, storyblokInit } from '@storyblok/react';

import { components } from '../components';

import '../css/globals.css';
import '../css/style.css';

storyblokInit({
	accessToken: 'PiTvwgCa2MKpqQ2Hw3KQWwtt',
	apiOptions: {
		region: 'us',
	},
	use: [apiPlugin],
	components,
});

const storyblokApi = getStoryblokApi();
const { data } = await storyblokApi.get('cdn/stories', { version: 'draft' });

function Website({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default Website;
