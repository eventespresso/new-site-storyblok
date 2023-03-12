import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Page = ({ blok }) => (
	<main className='mb-auto' {...storyblokEditable(blok)}>
		{blok.body.map((nestedBlok) => (
			<StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
		))}
	</main>
);

export default Page;
