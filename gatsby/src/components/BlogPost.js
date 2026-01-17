import React from 'react';
import { Link } from 'gatsby';
import Layout from './Layout';
import Sidebar from './Sidebar';
import config from '../../config';

const BlogPost = ({ title, date, description, children, slug }) => {
  const formattedDate = new Date(date).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const siteUrl = 'https://www.interokedigital.co.uk';
  const postUrl = `${siteUrl}/blog/${slug}`;
  const publishedDate = new Date(date).toISOString();

  // Article schema for SEO
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: `${siteUrl}/og-image.jpg`,
    datePublished: publishedDate,
    dateModified: publishedDate,
    author: {
      '@type': 'Person',
      name: `${config.firstName} ${config.lastName}`,
      url: siteUrl,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Interoke Digital',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/icon.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
  };

  return (
    <Layout
      title={`${title} - Interoke Digital Blog`}
      description={description}
      canonical={postUrl}
    >
      <Sidebar />
      <div className="container-fluid p-0">
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center">
          <div className="w-100">
            <div className="mb-4">
              <Link to="/blog" className="text-muted">
                <i className="fa fa-arrow-left mr-2"></i>Back to Blog
              </Link>
            </div>
            
            <article itemScope itemType="https://schema.org/Article">
              <script type="application/ld+json">
                {JSON.stringify(articleSchema)}
              </script>
              <h1 className="mb-3" itemProp="headline">{title}</h1>
              <div className="text-muted mb-4">
                <i className="fa fa-calendar mr-2"></i>
                <time dateTime={publishedDate} itemProp="datePublished">{formattedDate}</time>
              </div>
              
              <div className="blog-content" itemProp="articleBody">
                {children}
              </div>
              
              <hr className="my-5" />
              
              <div className="text-center">
                <Link to="/blog" className="btn btn-outline-primary mr-3">
                  <i className="fa fa-list mr-2"></i>All Posts
                </Link>
                <Link to="/#contact" className="btn btn-primary">
                  <i className="fa fa-envelope mr-2"></i>Get in Touch
                </Link>
              </div>
            </article>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BlogPost;
