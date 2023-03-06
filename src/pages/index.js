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

          <span className="d-block d-lg-none mb-2">
            <img
                className="img-fluid img-profile rounded-circle mx-auto mb-2"
                src={avatar}
                alt="Ben Lumley"
            />
          </span>

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
                        I am a Freelance Senior Web Developer with over 15 years experience. I specialise in all things PHP, with a particular focus on Symfony, Laravel, and <a href="/wordpress" title="WordPress Developer">WordPress</a>.</p>
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
                Experienced with many of the older PHP frameworks + extending their life - Cake, Symfony1, Zend1 etc.
              </li>
            </ul>
            <ul className="fa-ul mb-0 col-md">
              <li>
                <i className="fa-li fab fa-js-square"></i>
                Javascript - React/Vue/jQuery + Others
              </li>
              <li>
                <i className="fa-li fab fa-html5"></i>
                HTML / CSS
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
          <ul className="list-inline dev-icons mt-4">
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
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">


          <h2 className="mb-5">Key Projects</h2>


        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
                <div className="d-flex  justify-content-between ">

                    <div className="resume-heading mb-3">
                        <h3 className="mb-0">The Headteacher's Report & mySchoolWellbeing</h3>
                        <div className="subheading ">Freelance Developer</div>
                        <p className="lead"><a target={`_blank`} href={`https://www.theheadteachersreport.com/`}>Visit</a></p>
                    </div>

                    <div className="resume-date font-weight-bold text-md-right">
                        <span className="text-primary">2016 - Present</span>

                    </div>
                </div>
                <p>
                    Two projects for the same startup:
                    <ul>
                        <li>The Headteacher’s report provides reporting services to headteachers and the wider school management to help them meet their obligations to their governors, education authorities, and parents.</li>
                        <li>mySchoolWellbeing provides digital services to help schools discover, track and drive improvement to the wellbeing of staff, parents, and pupils.</li>
                    </ul>
                </p>

                <p>The Headteacher’s report is a system that automates the production of reports based on data drawn from publicly
                    available datasets issued by the Department for Education alongside data from schools’ own MIS systems.
                    This is a computationally intensive task - so a key challenge is to manage costs whilst still providing
                    fast turnaround. This is achieved with workload prioritisation and infrastructure scaling using EC2
                    instances supported by containerised services to provide near-instant ‘burstable’ capacity. I am also responsible for the web portal used day to day by customers - features include access to the reports,
                    subscription management, and configuration of certain aspects of the reports.</p>

                <p>mySchoolWellbeing at it's heart is a surveying tool that allows schools to periodically collect a dataset from each group (staff, parents, pupils) of stakeholders.
                    This data is then used to monitor and track wellbeing within the school through a data portal comprising customised reports and charting. As with the Headteacher’s report, there is again a heavy dependency on data being drawn in from dfe datasets and schools' own systems.</p>

            </div>
        </div>

          <div className="resume-item justify-content-between mb-5">
            <div className="resume-content">

              <div className="d-flex  justify-content-between ">

                <div className="resume-heading mb-3">
                  <h3 className="mb-0">The Adventurists</h3>
                  <div className="subheading ">Freelance Web Developer</div>
                  <p className="lead"><a target={`_blank`} href={`https://www.theadventurists.com/`}>Visit</a></p>
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
                                    <h3 className="mb-0">Applied Change - Change Journey Navigator</h3>
                                    <div className="subheading ">Freelance Developer</div>
                                    <p className="lead"><a target={`_blank`} href={`https://app.appliedchange.co.uk/`}>Visit</a></p>
                                </div>

                                <div className="resume-date font-weight-bold text-md-right">
                                    <span className="text-primary">2020 - Present</span>

                                </div>
                            </div>

                            <p>Applied Change are a data led change management consultancy, the Change Journey Navigator is an online software product to help deliver this service.</p>

                            <p>In essence, the project is a startup, I am responsible for the entirety of the system - the system design and development, as well as the server infrastructure and it's day to day operation.
                                The system centres around a tool for asking stakeholders a curated set of questions. Behind the scenes these are all carefully grouped and categorised which allows
                                analysis of the results against the Applied Change Model. The results of the survey are delivered through a reporting 'dashboard' that allows Applied Change to analyse the results in real time,
                                including the ability to dig into and compare data across different aspects of the 'model' as well as between locations, business groups and time periods. This in turn helps businesses to
                                understand what is and is not working and why, ultimately enabling them to drive change. The cycle can then be repeated to track progress and measure the impact of the change.
                            </p>

                            <p>The product is multi tenant - Applied Change use it, but they also provide the software to other change practioners to use with their clients; consequently it is multi-tenanted
                                with all that goes with that - for example user management, account levels, billing, and security.
                            </p>

                        </div>
                    </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <div className="d-flex  justify-content-between ">

                <div className="resume-heading mb-3">
                  <h3 className="mb-0">The Visa Machine</h3>
                  <div className="subheading ">Contract Web Developer</div>
                  <p className="lead"><s>Visit</s> (link no longer live)</p>
                </div>

                <div className="resume-date font-weight-bold text-md-right">
                  <span className="text-primary">2012 - 2020</span>
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



        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <div className="d-flex  justify-content-between ">

                <div className="resume-heading">
                  <h3 className="mb-0">Data Sync / Process Automation</h3>
                  <div className="subheading mb-3">Freelance Developer</div>
                </div>

              </div>

              <p>I take on smaller/ad-hoc development tasks to address specific problems businesses have - loosely within the realm of process automation.</p>

              <p>Examples include syncing orders between websites and accounting software; customised reporting; syncing stock levels between warehousing and ecommerce; integration with Amazon Vendor Central.</p>

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
