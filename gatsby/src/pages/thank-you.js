import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import config from '../../config';

const ThankYouPage = () => (
  <Layout
    title={`Thank You - ${config.siteTitle}`}
    description="Thank you for getting in touch. I'll respond to your message soon."
  >
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100 text-center">
          <Helmet>
            <title>Thank You - Interoke Digital</title>
          </Helmet>
          
          <h1 className="mb-4">
            <i className="fa fa-check-circle text-success mr-3"></i>
            Thank You!
          </h1>
          
          <p className="lead mb-4">
            Your message has been sent successfully. I'll get back to you as soon as possible.
          </p>
          
          <p className="mb-5">
            In the meantime, feel free to explore my <a href="/#experience">projects</a> or check out my <a href="/#skills">skills and experience</a>.
          </p>
          
          <a href="/" className="btn btn-primary btn-lg">
            <i className="fa fa-home mr-2"></i>Return to Home
          </a>
        </div>
      </section>
    </div>
  </Layout>
);

export default ThankYouPage;
