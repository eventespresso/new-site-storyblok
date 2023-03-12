import { storyblokInit, apiPlugin } from "@storyblok/react";

import { Feature, Grid, Page, Teaser } from "../components";

import '../css/site.css';
import '../css/style.css';

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
};

storyblokInit({
	accessToken: 'PiTvwgCa2MKpqQ2Hw3KQWwtt',
	apiOptions: {
		region: 'us',
	},
	use: [apiPlugin],
	components,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
