import React from 'react'
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";


export const Grid = ({ blok }) => {
  return (
    <div className="grid" {...storyblokEditable(blok)}>
      {blok.columns.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};
