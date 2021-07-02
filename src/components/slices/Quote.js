import React from 'react';
import { RichText } from 'prismic-reactjs';

/**
 * Quote slice component
 */
const Quote = ({ slice }) => (
  <section data-scroll-section className="content-section quote">
    <blockquote data-scroll>
      {RichText.asText(slice.primary.quote_text)}
    </blockquote>
  </section>
);

export default Quote;
