import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/sass/resume.scss';
import config from '../../config';

class Layout extends Component {
  render() {
    const { children, description, image, title } = this.props;
    const siteTitle = title || config.siteTitle;
    const siteDescription = description || 'Ben Lumley - Full-stack developer in Bath, Bristol, and Wiltshire. Specialising in Laravel, backend development, and scaling solutions. Building software products for businesses of all sizes. Web developer and software developer services.';
    const siteUrl = 'https://www.interokedigital.co.uk';
    const siteImage = image || `${siteUrl}/og-image.jpg`;

    // Structured data for local business
    const location = config.location || {};
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: `${config.firstName} ${config.lastName}`,
      jobTitle: 'Full-Stack Developer',
      worksFor: {
        '@type': 'Organization',
        name: 'Interoke Digital',
        url: siteUrl,
        address: {
          '@type': 'PostalAddress',
          addressLocality: location.city || 'Bath',
          addressRegion: location.region || 'Wiltshire',
          addressCountry: location.country || 'GB',
        },
        areaServed: location.areas || ['Bath', 'Bristol', 'Wiltshire', 'UK'],
      },
      email: config.email,
      telephone: config.phone,
      url: siteUrl,
      sameAs: config.socialLinks.map(link => link.url),
      knowsAbout: ['Laravel', 'PHP', 'Backend Development', 'Full-Stack Development', 'Software Development', 'Startup Development'],
    };

    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
                siteUrl
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={siteTitle}
              meta={[
                { name: 'description', content: siteDescription },
                { name: 'keywords', content: 'Ben Lumley, freelance developer, full-stack developer, laravel developer, startup developer, bath developer, bristol developer, wiltshire developer, php developer, backend developer, software developer, web developer' },
                { name: 'author', content: `${config.firstName} ${config.lastName}` },
                { name: 'geo.region', content: 'GB-WIL' },
                { name: 'geo.placename', content: 'Bath' },
                
                // Open Graph
                { property: 'og:type', content: 'website' },
                { property: 'og:title', content: siteTitle },
                { property: 'og:description', content: siteDescription },
                { property: 'og:url', content: siteUrl },
                { property: 'og:image', content: siteImage },
                { property: 'og:locale', content: 'en_GB' },
                { property: 'og:site_name', content: 'Interoke Digital' },
                
                // Twitter Card
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:title', content: siteTitle },
                { name: 'twitter:description', content: siteDescription },
                { name: 'twitter:image', content: siteImage },
              ]}
            >
              <html lang="en" />
              <script type="application/ld+json">
                {JSON.stringify(structuredData)}
              </script>
              {config.googleAnalyticsId && (
                <>
                  <script async src={`https://www.googletagmanager.com/gtag/js?id=${config.googleAnalyticsId}`}></script>
                  <script>
                    {`
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${config.googleAnalyticsId}');
                    `}
                  </script>
                </>
              )}
            </Helmet>
            <div className={'main-body'}>{children}</div>
            {/* <div className="corner-ribbon top-right sticky orange">Immediate<br/> Availability</div> */}
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
