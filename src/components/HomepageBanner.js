import React, { useEffect } from 'react';
import { RichText } from 'prismic-reactjs';
import { PrismicLink } from './prismic-elements';
import LocomotiveScroll from 'locomotive-scroll';


/**
 * Homepage banner component
 */

const HomepageBanner = ({ banner }) => {
  
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true
  });
  })
  return (
    <section data-scroll-section
      className="homepage-banner"
      style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${banner.image.url})` }}
    >
      <div data-scroll-section className="banner-content container">
        <h2 data-scroll className="banner-title">
          {RichText.asText(banner.title)}
        </h2>
        <p data-scroll className="banner-description">
          {RichText.asText(banner.tagline)}
        </p>
        <PrismicLink
          link={banner.button_link}
          linkClass="banner-button"
        >
          {RichText.asText(banner.button_label)}
        </PrismicLink>
      </div>
    </section>
  );
}

export default HomepageBanner;
