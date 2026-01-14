import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import config from '../../config';

const blogPosts = [
  {
    title: "Why Laravel Queues Are Essential for Startup Applications",
    slug: "laravel-queues-for-startups",
    date: "2026-01-10",
    description: "Learn how Laravel queues can help your startup application handle background tasks efficiently, improve user experience, and scale without breaking the bank.",
  },
  {
    title: "Building a Minimal MVP: What You Actually Need vs. What You Think You Need",
    slug: "building-minimal-mvp",
    date: "2025-11-15",
    description: "Practical advice on building a minimal viable product for startups, focusing on what features are truly essential and what can wait.",
  },
  {
    title: "Scaling Your Laravel Backend: Lessons from Growing Startup Applications",
    slug: "scaling-laravel-backend",
    date: "2025-09-08",
    description: "Practical strategies for scaling Laravel applications as your startup grows, covering database optimization, caching, and infrastructure decisions.",
  },
  {
    title: "API Design for Startups: Building Backends That Don't Break Frontends",
    slug: "api-design-startups",
    date: "2025-07-03",
    description: "Best practices for designing RESTful APIs in Laravel that are maintainable, scalable, and developer-friendly for startup applications.",
  },
  {
    title: "Database Design for Startups: Getting the Foundation Right",
    slug: "database-design-startups",
    date: "2025-04-12",
    description: "Essential database design principles for startup applications, covering normalization, indexing, and when to denormalize for performance.",
  },
  {
    title: "Why Full-Stack Developers Are Perfect for Early-Stage Startups",
    slug: "full-stack-startup",
    date: "2025-01-15",
    description: "The advantages of working with a full-stack developer when building your startup, and how it differs from larger team structures.",
  },
];

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const BlogPage = () => (
  <Layout
    title="Blog & Resources - Interoke Digital"
    description="Articles, guides, and resources about Laravel development, startup software development, and building scalable web applications."
  >
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">Blog & Resources</h1>
          <div className="subheading mb-5">
            <span className="text-primary">Interoke Digital</span>
          </div>
          
          <p className="lead mb-5">
            Articles, guides, and insights about building software products for startups, 
            Laravel development, scaling applications, and technical best practices.
          </p>

          <div className="blog-posts">
            {blogPosts.map((post, index) => (
              <article key={post.slug} className="mb-5 pb-4 border-bottom">
                <h2 className="mb-2">
                  <Link to={`/blog/${post.slug}`} className="text-dark">
                    {post.title}
                  </Link>
                </h2>
                <div className="text-muted mb-3">
                  <i className="fa fa-calendar mr-2"></i>
                  {formatDate(post.date)}
                </div>
                <p className="mb-3">{post.description}</p>
                <Link to={`/blog/${post.slug}`} className="btn btn-sm btn-outline-primary">
                  Read More <i className="fa fa-arrow-right ml-2"></i>
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-5">
            <h3 className="mb-3">Topics Covered</h3>
            <ul className="fa-ul">
              <li><i className="fa-li fa fa-check text-primary"></i>Laravel development tips and best practices</li>
              <li><i className="fa-li fa fa-check text-primary"></i>Building scalable backend systems</li>
              <li><i className="fa-li fa fa-check text-primary"></i>Startup software development insights</li>
              <li><i className="fa-li fa fa-check text-primary"></i>Performance optimization techniques</li>
              <li><i className="fa-li fa fa-check text-primary"></i>Infrastructure and DevOps for small teams</li>
              <li><i className="fa-li fa fa-check text-primary"></i>API design and database architecture</li>
            </ul>
          </div>

          <div className="mt-4">
            <Link to="/" className="btn btn-outline-primary">
              <i className="fa fa-arrow-left mr-2"></i>Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  </Layout>
);

export default BlogPage;
