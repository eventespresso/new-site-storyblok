import { storyblokInit, apiPlugin } from "@storyblok/react";

import { Feature, Footer, Grid, Header, Page, Teaser } from '../components';

import '../css/globals.css';
import '../css/style.css';

storyblokInit({
	accessToken: 'PiTvwgCa2MKpqQ2Hw3KQWwtt',
	apiOptions: {
		region: 'us',
	},
	use: [apiPlugin],
	components: {
		feature: Feature,
		footer: Footer,
		grid: Grid,
		header: Header,
		Layout: Layout,
		NavLink: NavLink,
		PrimaryHeaderNav: PrimaryHeaderNav,
		page: Page,
		teaser: Teaser,
	},
});

function Website({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default Website;
