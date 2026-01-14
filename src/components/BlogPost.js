import React from 'react';
import { Link } from 'gatsby';
import Layout from './Layout';
import Sidebar from './Sidebar';

const BlogPost = ({ title, date, description, children, slug }) => {
  const formattedDate = new Date(date).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Layout
      title={`${title} - Interoke Digital Blog`}
      description={description}
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
            
            <article>
              <h1 className="mb-3">{title}</h1>
              <div className="text-muted mb-4">
                <i className="fa fa-calendar mr-2"></i>
                {formattedDate}
              </div>
              
              <div className="blog-content">
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
