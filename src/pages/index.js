import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
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
            Interoke Digital
          </h1>
          <h2>
            <span className="text-primary">Freelance Web Developer</span>
          </h2>
          <div className="subheading mb-5">
            {config.phone} · <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead">
            My name is Ben Lumley. I am an experienced Freelance Senior Web Developer. I specialise in all things PHP, with a particular focus on Symfony, Laravel and WordPress.</p>
          <p className="lead mb-5">I am based just outside Bath, in Wiltshire, England.</p>

          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url} target={`_blank`}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>





      <hr className="m-0" />

      <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Development Tools
          </div>
          <ul className="list-inline dev-icons mb-4">
            <li className="list-inline-item">
              <i className="fab fa-laravel" title={`Laravel`}></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-symfony" title={`Symfony`}></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-wordpress" title={`Wordpress`}></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-php" title={`Php`}></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square" title={`Javascript`}></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-html5" title={`Html5`}></i>
            </li>

            <li className="list-inline-item">
              <i className="fab fa-angular" title={`Angular`}></i>
            </li>

            <li className="list-inline-item">
              <i className="fab fa-react" title={`React`}></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js" title={`nodejs`}></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-sass" title={`Sass`}></i>
            </li>

            <li className="list-inline-item">
              <i className="fab fa-gulp" title={`Gulp`}></i>
            </li>

            <li className="list-inline-item">
              <i className="fab fa-npm" title={`NPM`}></i>
            </li>

            <li className="list-inline-item">
              <i className="fab fa-aws" title={`AWS`}></i>
            </li>

            <li className="list-inline-item">
              <i className="fab fa-linux" title={`Linux`}></i>
            </li>

          </ul>
          <div className="row p-2">
            <ul className="fa-ul mb-0 col-md">
              <li>
                <i className="fa-li fab fa-symfony"></i>
                Symfony
              </li>
              <li>
                <i className="fa-li fab fa-laravel"></i>
                Laravel
              </li>
              <li>
                <i className="fa-li fab fa-wordpress"></i>
                WordPress
              </li>
              <li>
                <i className="fa-li fab fa-php"></i>
                + generally anything PHP
              </li>
              <li>
                <i className="fa-li fa fa-clock"></i>
                Experienced with many of the older PHP frameworks - Cake, Symfony1, Zend1 etc
              </li>
            </ul>
            <ul className="fa-ul mb-0 col-md">
              <li>
                <i className="fa-li fab fa-js-square"></i>
                Javascript - React/Vue/jQuery + Others
              </li>
              <li>
                <i className="fa-li fab fa-html5"></i>
                HTML
              </li>
              <li>
                <i className="fa-li fab fa-react"></i>
                JAM Stack - Hugo, Gatsby, Netlify etc
              </li>
              <li>
                <i className="fa-li fab fa-linux"></i>
                Sysadmin/Devops
              </li>
              <li>
                <i className="fa-li fab fa-aws"></i>
                Amazon Web Services
              </li>
              <li>
                <i className="fa-li fab fa-docker"></i>
                Docker / Containerisation
              </li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">


          <h2 className="mb-5">Key Projects</h2>

          <div className="resume-item justify-content-between mb-5">
            <div className="resume-content">

              <div className="d-flex  justify-content-between ">

                <div className="resume-heading mb-3">
                  <h3 className="mb-0">The Adventurists</h3>
                  <div className="subheading ">Freelance Web Developer</div>
                  <p className="lead"><a target={`_blank`} href={`https://www.theadventurists.com/`}>https://www.theadventurists.com/</a></p>
                </div>

                <div className="resume-date font-weight-bold text-md-right">
                  <span className="text-primary">2013 - Present</span>
                </div>
              </div>

              <p>
                The Adventurists are a fast moving travel operator. I co-lead the development team responsible for the tracking, administration, and ecommerce software that underpins the company’s operations.
              </p>
              <p>
                This includes:
                </p>
              <ul>
                <li>Tracking maps provided for the public to track participants in real time alongside curated social
                  media posts. This is required to cope with huge traffic spikes generated by mainstream media coverage
                  of events, achieved using a caching strategy based on pre-rendering all key assets and API endpoints
                  to Varnish/Cloudflare with an invalidation strategy to manage content updates.
                </li>
                <li>Alongside the public maps, the system includes mission critical real time tooling used by on the
                  ground teams to track participants by GPS and coordinate emergency medical/evacuation response when
                  required.
                </li>
                <li>Ecommerce solution which has to provide flexibility to cover a range of events with different
                  payment mechanisms and legal issues whilst coping with ‘surge’ traffic when in demand events go on
                  sale.
                </li>
                <li>Responsibility for all server infrastructure and testing/CI processes.</li>
              </ul>


            </div>

          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <div className="d-flex  justify-content-between ">

                <div className="resume-heading mb-3">
                  <h3 className="mb-0">The Headteacher's Report</h3>
                  <div className="subheading ">Freelance Developer</div>
                  <p className="lead"><a target={`_blank`} href={`https://www.theheadteachersreport.com/`}>https://www.theheadteachersreport.com/</a></p>
                </div>

                <div className="resume-date font-weight-bold text-md-right">
                  <span className="text-primary">2016 - Present</span>

                </div>
              </div>
              <p>
                A startup, The Headteacher’s report provides reporting services to headteachers and the wider school management to help them meet their obligations to their governors, education authorities, and parents.
              </p>

              <p>At its core is a system that automates the production of reports based on data drawn from publicly
                available datasets issued by the Department for Education alongside data from schools’ own MIS systems.
                This is a computationally intensive task - so a key challenge is to manage costs whilst still providing
                fast turnaround. This is achieved with workload prioritisation and infrastructure scaling using EC2
                instances supported by containerised services to provide near-instant ‘burstable’ capacity.</p>

              <p>I am also responsible for the web portal used day to day by customers - features include access to the reports,
              subscription management, and configuration of certain aspects of the reports.</p>

            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <div className="d-flex  justify-content-between ">

                <div className="resume-heading mb-3">
                  <h3 className="mb-0">The Visa Machine</h3>
                  <div className="subheading ">Contract Web Developer</div>
                  <p className="lead"><a target={`_blank`} href={`https://www.thevisamachine.com/`}>https://www.thevisamachine.com/</a></p>
                </div>

                <div className="resume-date font-weight-bold text-md-right">
                  <span className="text-primary">2012 - Present</span>
                </div>
              </div>

              <p>I lead the development team responsible for developing and maintaining the software used by this
                multi-national online visa application service.</p>

              <p>A key component is a decision engine that
              recommends the most appropriate visa for your trip based on facts such as where you are going, how long
              for, and what for - from over 10,000 configured products. This ties in with a multi-channel ecommerce
              system that allows The Visa Machine and over 100 partners/resellers to sell products, each with a
              customisable product range and pricing alongside differing commercial arrangements.</p>

              <p>We also deliver the backend system used by staff across four global offices to administer procurement and delivery of
              visas and management of the product catalogue.</p>

              <p>Legacy management is a key component on this project as well. We regularly review/assess the state of the system, flagging where we have to make upgrades for security
              or operational reasons. I also identify and make recommendations when other opportunities to make upgrades
              arise and are commercially sensible.</p>

              <p>I’m also responsible for all server infrastructure and devops processes.</p>


            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <div className="d-flex  justify-content-between ">

                <div className="resume-heading">
                  <h3 className="mb-0">Various Digital Agencies</h3>
                  <div className="subheading mb-3">Freelance Developer</div>
                </div>

              </div>

              <p>I provide outsource development support to a number of agencies, usually taking on specific projects
                outside the in-house skillset or capacity. I have occasionally filled in as a part time lead developer
                providing support and consultancy to in-house development teams.</p>
              <p>Projects have been all shapes and sizes - including ecommerce, management systems, WordPress plugins, security audits, performance
              consultancy, server migrations, and mobile applications.</p>
              <p>End clients have included British American
              Tobacco, Currys PC World, Diageo, Lindt, Nestle, Liverpool FC and Oxford University.</p>



            </div>
          </div>


        </div>
      </section>

      <hr className="m-0" />

      <section
          className="resume-section p-3 p-lg-5 d-flex align-items-center"
          id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">University of Oxford</h3>
              <div className="subheading mb-3">MA</div>
              <div className="lead">Biological Sciences</div>

            </div>
            <div className="resume-date font-weight-bold text-md-right">
              <span className="text-primary">2005</span>
            </div>
          </div>

        </div>
      </section>


    </div>
  </Layout>
);

export default IndexPage;
