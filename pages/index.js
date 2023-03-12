import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

import { getStoryblokApi, StoryblokComponent } from "@storyblok/react"

export default function Home(props) {
    const story = props.story

	return (
		<Layout className={styles.container}>
			<StoryblokComponent blok={story.content} />
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
