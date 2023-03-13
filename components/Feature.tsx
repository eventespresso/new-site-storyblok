import React from 'react'
import { storyblokEditable } from "@storyblok/react";

export const Feature = ({ blok }) => (
  <div className="column feature" {...storyblokEditable(blok)}>
    {blok.name}
  </div>
);
