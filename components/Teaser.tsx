import React from 'react'
import { storyblokEditable } from "@storyblok/react";


export const Teaser = ({ blok }) => {
  return <h2 {...storyblokEditable(blok)}>{blok.headline}</h2>;
};
