import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Page = ({ blok }) => (
	<main className='max-w-5xl mx-auto mb-auto px-5' {...storyblokEditable(blok)}>
		{blok.body.map((nestedBlok) => (
			<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
		))}
	</main>
);

export default Page;
