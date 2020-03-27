import React from 'react';

import Layout from '../components/Layout';
import config from "../../config";

const IndexPage = () => (
  <Layout>
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <header className="major">
          <h2>
            Page not found
            <br />
            Not a valid URL
          </h2>
          <h3><a className="text-primary text-center" href={`/`}>Why not vist our home page?</a></h3>
        </header>
      </section>
    </div>
  </Layout>
);

export default IndexPage;