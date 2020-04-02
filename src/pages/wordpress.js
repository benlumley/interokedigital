import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
import avatar from "../assets/images/avatar.jpg";
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">

          <h1 className="mb-0">
            WordPress Development
          </h1>

          <div className="subheading mb-5">
            <span className="text-primary">Interoke Digital</span> · {config.phone} · <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            I have worked with WordPress for over 10 years, covering all aspects of WordPress development - plugin development and customisation, theme development, performance, security, and high performance hosting setups.
          </p>
        </div>
      </section>





      <hr className="m-0" />

      <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">WordPress Development</h2>

          <div className="subheading mb-3">
            WordPress Plugin Development
          </div>

          <p>
            I regularly work on custom WordPress plugins where clients need specific features or functionality added to their WordPress website. I have extensive knowledge and experience customising and extending many major plugins including Advanced Custom Fields (ACF), WPML (WordPress Multi Lingual) and WooCommerce (WordPress E-Commerce). I am also familiar and comfortable doing all of this in the context of WordPress multi-site where applicable.</p>

          <p>Example projects have included: </p>

          <ul>
            <li>Additional rules and field types for Advanced Custom Fields.</li>
            <li>Custom WPML translation workflows.</li>
            <li>Booking systems.</li>
            <li>Integration of advanced search systems such as Elasticsearch or Solr.</li>
            <li>Data migration from old websites or legacy systems.</li>
            <li>Data synchronisation with third party stock controls.</li>
            <li>Membership systems and subscriber only websites.</li>
          </ul>


          <div className="subheading mb-3">
            WordPress Theme Development
          </div>

          <p>I regularly create WordPress themes from designs and also often collaborate with other theme builders to build the more technical parts of their projects - recent examples have included custom JavaScript functionality, advanced searching/filtering of content, and sharing of content across a WordPress multi site network.</p>

        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">


          <h2 className="mb-5">WordPress Performance</h2>

          <p>Website performance is key to getting good Google rankings and keeping visitors engaged - if your site doesn't load fast it's not helping your business as much as it could. Tools such as <a href={`https://developers.google.com/speed/pagespeed/insights/`} target={`_blank`}>Google PageSpeed</a> and <a href={`https://webpagetest.org/`}>Web Page Test</a> can help you measure your site's performance and track improvements.</p>

          <p>Caching is a great way to make WordPress fast. I know and work with several of the popular WordPress caching plugins including WP Super Cache, W3 Total Cache, WP Rocket, Autoptimize. I am an expert at configuring them to not only make your Website fast, but also making sure your website is still easy for you to keep updated without having to do hard refreshes or clear caches to see your changes.</p>

          <p>However, caching can only get you so far - the underlying performance of the site still matters as well. I can help you to identify and remove, replace or optimize plugins and code that are particularly slow and impacting the speed of your site.</p>

          <p>Your web hosting is also key to performance - I can advise and help with setting this up too. See WordPress hosting below.</p>

        </div>
      </section>

      <hr className="m-0" />

      <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">WordPress Security</h2>

          <p>One of the downsides to using WordPress is that because it is so widely used it does attract hackers/attackers and vulnerabilities are occasionally found in either WordPress or plugins. So it is important that you consider security.</p>

          <p>Basic measures such as ensuring you use a reputable web host, using strong passwords, deleting old user accounts, and keeping WordPress and plugins up to date can go a long way to keeping your site secure.</p>

          <p>Many businesses and site owners now opt to do a little bit extra to make their sites a little harder to attack - I can help here; I regularly review and audit the security of WordPress websites and put in place improvements. I typically consider three areas:</p>

          <ol>
            <li>WordPress hardening - as well as the basic measures mentioned above this typically involves installing and configuring a plugin such as iThemes security pro, WordFence or Sucuri to provide features such as 2 factor authentication, enforce password strength rules, brute force protection, and a suite of hardening measures.</li>
            <li>Hosting configuration - ensuring that the server/platform hosting the site is correctly configured, suitably robust, and that WordPress is installed correctly. In some cases additional server level security can be put in place, for example to restrict the WordPress admin area so that it can only be accessed via your office network.</li>
            <li>Network level security - systems can be put in place to monitor the traffic coming to your website at network level and to block suspicious activity or attempts to exploit known issues. Some of the dedicated WordPress hosts such as WP-Engine / Flywheel etc include this as part of their networks, or you can use a provider such as Cloudflare or Sucuri to provide this if you host elsehwere. This type of measure has been particularly effective at providing protection very quickly when major vulnerabilities are found.</li>
          </ol>



        </div>
      </section>

      <hr className="m-0" />

      <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">WordPress Hosting</h2>

          <p>I regularly work with clients to assess the technical needs of their website and together with an understanding of their business and how critical their website is - I recommend and put in place appropriate hosting both for now and in the future to ensure the website stays online and stays fast.</p>

          <p>This often includes contingency planning for clients that know there is a possibility of coverage on TV or mainstream media. I have suggested and put in place hosting configurations that use caching plugins and tools such as Cloudflare, Varnish and CDN to have the capability to rapidly and cost effectively deal with a huge increase in traffic without having the cost and extra complexity to deal with on a day to day basis.</p>

          <p>I am familiar with and use many of the specialist WordPress hosts such as Flywheel, WP-Engine, Pagely, SpinupWP, Pantheon, and others and can advise on the pro's and cons of each and recommend suitable packages.</p>
        </div>
      </section>

      <hr className="m-0" />

      <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">WordPress Disaster Recovery</h2>

          <p>If your WordPress site has been hacked or appears to have adverts or links in that you didn't put there, I can help you to identify and correct the problem and also to prevent the site getting hacked again in the future.</p>

        </div>
      </section>


    </div>
  </Layout>
);

export default IndexPage;
