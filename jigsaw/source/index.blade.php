---
title: Interoke Digital | Full-Stack Developer | Bath, Bristol, Wiltshire
description: Ben Lumley - Full-stack developer in Bath, Bristol, and Wiltshire. Specialising in Laravel, backend development, and scaling solutions. Building software products for businesses of all sizes. Web developer and software developer services.
canonical: https://www.interokedigital.co.uk/
---
@extends('_layouts.master')

@php
    $serviceSchema = [
        '@context' => 'https://schema.org',
        '@type' => 'ProfessionalService',
        'name' => 'Interoke Digital',
        'description' => 'Full-stack development services specializing in Laravel, React, and startup software development. Serving Bath, Bristol, Wiltshire, and UK-wide.',
        'url' => $page->siteUrl,
        'provider' => [
            '@type' => 'Person',
            'name' => $page->firstName . ' ' . $page->lastName,
            'jobTitle' => 'Full-Stack Developer',
            'email' => $page->email,
            'telephone' => $page->phone,
        ],
        'areaServed' => [
            [
                '@type' => 'City',
                'name' => 'Bath',
            ],
            [
                '@type' => 'City',
                'name' => 'Bristol',
            ],
            [
                '@type' => 'AdministrativeArea',
                'name' => 'Wiltshire',
            ],
            [
                '@type' => 'Country',
                'name' => 'United Kingdom',
            ],
        ],
        'serviceType' => [
            'Laravel Development',
            'Full-Stack Development',
            'Backend Development',
            'API Development',
            'Startup Software Development',
            'System Integration',
            'DevOps Consulting',
        ],
        'priceRange' => '$$',
    ];

    $faqSchema = [
        '@context' => 'https://schema.org',
        '@type' => 'FAQPage',
        'mainEntity' => [
            [
                '@type' => 'Question',
                'name' => 'Are you a Laravel developer in Bath?',
                'acceptedAnswer' => [
                    '@type' => 'Answer',
                    'text' => 'Yes, I\'m a full-stack developer based just outside Bath, Wiltshire, specializing in Laravel development. I work with clients across Bath, Bristol, and Wiltshire, as well as throughout the UK.',
                ],
            ],
            [
                '@type' => 'Question',
                'name' => 'What services do you offer as a full-stack developer?',
                'acceptedAnswer' => [
                    '@type' => 'Answer',
                    'text' => 'I provide complete full-stack development services including backend development with Laravel, frontend development with React, API development, system integration, DevOps, and infrastructure management. I specialize in building software products for startups and scaling existing applications.',
                ],
            ],
            [
                '@type' => 'Question',
                'name' => 'Do you work with startups?',
                'acceptedAnswer' => [
                    '@type' => 'Answer',
                    'text' => 'Yes, I specialize in working with startups and SaaS companies. I have extensive experience building MVPs, scaling applications, and helping shape the technical direction of early-stage companies. My experience includes working with software startups, SaaS startups, and businesses needing CRM systems.',
                ],
            ],
            [
                '@type' => 'Question',
                'name' => 'What technologies do you use?',
                'acceptedAnswer' => [
                    '@type' => 'Answer',
                    'text' => 'I primarily work with Laravel (PHP) for backend development and React for frontend development. I also have experience with WordPress, AWS, Docker, Linux server management, and various database systems. I\'m a strong advocate of choosing the right technology for each project rather than defaulting to what I know best - I\'ll recommend and work with whatever stack makes the most sense for your specific needs and constraints.',
                ],
            ],
            [
                '@type' => 'Question',
                'name' => 'What does Full-Stack Developer mean?',
                'acceptedAnswer' => [
                    '@type' => 'Answer',
                    'text' => 'A full-stack developer handles both the frontend (what users see and interact with) and backend (server, database, APIs) of web applications. This means I can build complete software solutions from start to finish - from designing databases and APIs to creating user interfaces and managing server infrastructure. This makes me particularly valuable for startups and small teams who need someone who can work across the entire technical stack.',
                ],
            ],
            [
                '@type' => 'Question',
                'name' => 'How long have you been developing software?',
                'acceptedAnswer' => [
                    '@type' => 'Answer',
                    'text' => 'I have over 20 years of experience in software development. I\'ve worked on projects ranging from small business websites to large-scale applications, including ecommerce platforms, SaaS products, CRM systems, business information systems, and management systems.',
                ],
            ],
        ],
    ];
@endphp

@section('structuredData')
    <script type="application/ld+json">{!! json_encode($serviceSchema, JSON_UNESCAPED_SLASHES) !!}</script>
    <script type="application/ld+json">{!! json_encode($faqSchema, JSON_UNESCAPED_SLASHES) !!}</script>
@endsection

@section('content')
    @include('_partials.sidebar')
    <div class="container-fluid p-0">
        <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
            <div class="w-100">
                <span class="d-block d-lg-none mb-2">
                    <img
                        class="img-fluid img-profile rounded-circle mx-auto mb-2"
                        src="/assets/images/avatar.jpg"
                        alt="Ben Lumley"
                    >
                </span>

                <h1 class="mb-0">
                    Full-Stack Developer in Bath &amp; Bristol | Laravel Expert
                </h1>
                <h2>
                    <span class="text-primary">Interoke Digital</span>
                </h2>
                <div class="subheading mb-5">
                    {{ $page->phone }} · <a href="mailto:{{ $page->email }}">{{ $page->email }}</a>
                </div>
                <p class="lead">
                    With over 20 years of experience, I handle everything technical - from servers and infrastructure to backend
                    development, frontend implementation, and scaling as your business grows. I'm effective at communicating and
                    discussing software with non-technical people, and experienced at helping to shape and decide the direction
                    of software projects. This makes me a great fit for <a href="#myschoolwellbeing">software startups</a>,
                    <a href="#applied-change">SaaS startups</a>, small businesses in need of CRM systems, or
                    <a href="#data-sync">integration work between systems</a>.
                </p>
                <p class="lead">
                    I'm particularly experienced with the <strong>Laravel</strong> framework and <strong>React</strong>, and these
                    are what I prefer to work with where they fit.
                </p>
                <p class="lead mb-5">
                    I'm based just outside <strong>Bath, Wiltshire</strong> - working with both local clients across
                    <strong>Bath, Bristol and Wiltshire</strong> as well as clients throughout the UK.
                </p>

                <div class="mb-4">
                    <a href="#contact" class="btn btn-primary btn-lg mr-3">
                        <i class="fa fa-envelope mr-2"></i>Get in Touch
                    </a>
                    <a href="#experience" class="btn btn-outline-primary btn-lg">
                        <i class="fa fa-briefcase mr-2"></i>View Projects
                    </a>
                </div>

                <div class="social-icons">
                    @foreach ($page->socialLinks as $social)
                        <a href="{{ $social['url'] }}" target="_blank" rel="noreferrer">
                            <i class="fab {{ $social['icon'] }}"></i>
                        </a>
                    @endforeach
                </div>
            </div>
        </section>

        <hr class="m-0">

        <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="faq">
            <div class="w-100">
                <h2 class="mb-5">Frequently Asked Questions</h2>

                <div class="faq-list">
                    <div class="faq-item mb-4">
                        <h3 class="h4 mb-2">
                            <i class="fa fa-question-circle text-primary mr-2"></i>
                            Are you a Laravel developer in Bath?
                        </h3>
                        <p class="lead">
                            Yes, I'm a full-stack developer based just outside Bath, Wiltshire, specializing in Laravel development. I work with clients across Bath, Bristol, and Wiltshire, as well as throughout the UK.
                        </p>
                    </div>

                    <div class="faq-item mb-4">
                        <h3 class="h4 mb-2">
                            <i class="fa fa-question-circle text-primary mr-2"></i>
                            What services do you offer as a full-stack developer?
                        </h3>
                        <p class="lead">
                            I provide complete full-stack development services including backend development with Laravel, frontend development with React, API development, system integration, DevOps, and infrastructure management. I specialize in building software products for startups and scaling existing applications.
                        </p>
                    </div>

                    <div class="faq-item mb-4">
                        <h3 class="h4 mb-2">
                            <i class="fa fa-question-circle text-primary mr-2"></i>
                            Do you work with startups?
                        </h3>
                        <p class="lead">
                            Yes, I specialize in working with startups and SaaS companies. I have extensive experience building MVPs, scaling applications, and helping shape the technical direction of early-stage companies. My experience includes working with software startups, SaaS startups, and businesses needing CRM systems.
                        </p>
                    </div>

                    <div class="faq-item mb-4">
                        <h3 class="h4 mb-2">
                            <i class="fa fa-question-circle text-primary mr-2"></i>
                            What technologies do you use?
                        </h3>
                        <p class="lead">
                            I primarily work with <strong>Laravel</strong> (PHP) for backend development and <strong>React</strong> for frontend development. I also have experience with WordPress, AWS, Docker, Linux server management, and various database systems. I'm a strong advocate of choosing the right technology for each project rather than defaulting to what I know best - I'll recommend and work with whatever stack makes the most sense for your specific needs and constraints.
                        </p>
                    </div>

                    <div class="faq-item mb-4">
                        <h3 class="h4 mb-2">
                            <i class="fa fa-question-circle text-primary mr-2"></i>
                            What does Full-Stack Developer mean?
                        </h3>
                        <p class="lead">
                            A full-stack developer handles both the <strong>frontend</strong> (what users see and interact with) and <strong>backend</strong> (server, database, APIs) of web applications. This means I can build complete software solutions from start to finish - from designing databases and APIs to creating user interfaces and managing server infrastructure. This makes me particularly valuable for startups and small teams who need someone who can work across everything technical.
                        </p>
                    </div>

                    <div class="faq-item mb-4">
                        <h3 class="h4 mb-2">
                            <i class="fa fa-question-circle text-primary mr-2"></i>
                            How long have you been developing software?
                        </h3>
                        <p class="lead">
                            I have over 20 years of experience in software development. I've worked on projects ranging from small business websites to large-scale applications, including ecommerce platforms, SaaS products, CRM systems, business information systems, and management systems.
                        </p>
                    </div>
                </div>

                <div class="mt-4">
                    <a href="#contact" class="btn btn-primary btn-lg">
                        <i class="fa fa-envelope mr-2"></i>Get in Touch
                    </a>
                </div>
            </div>
        </section>

        <hr class="m-0">

        <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
            <div class="w-100">
                <h2 class="mb-5">Skills</h2>

                <div class="subheading mb-3">Full-Stack Capabilities</div>
                <p class="mb-4">
                    I handle the complete technical stack - from infrastructure and servers to backend APIs,
                    frontend development, and scaling solutions. My strongest suit is backend development, where I build
                    robust, scalable systems that grow with your business.
                </p>

                <div class="row p-2">
                    <ul class="fa-ul mb-0 col-md">
                        <li>
                            <i class="fa-li fab fa-laravel"></i>
                            <strong>Laravel</strong> - My primary framework for new projects
                        </li>
                        <li>
                            <i class="fa-li fab fa-php"></i>
                            PHP &amp; Backend Development
                        </li>
                        <li>
                            <i class="fa-li fab fa-wordpress"></i>
                            WordPress (when it's the right tool)
                        </li>
                        <li>
                            <i class="fa-li fa fa-server"></i>
                            API Development &amp; Integration
                        </li>
                        <li>
                            <i class="fa-li fa fa-database"></i>
                            Database Design &amp; Optimization
                        </li>
                    </ul>
                    <ul class="fa-ul mb-0 col-md">
                        <li>
                            <i class="fa-li fab fa-js-square"></i>
                            Frontend - React
                        </li>
                        <li>
                            <i class="fa-li fab fa-html5"></i>
                            HTML / CSS / Responsive Design
                        </li>
                        <li>
                            <i class="fa-li fab fa-linux"></i>
                            DevOps &amp; Server Management
                        </li>
                        <li>
                            <i class="fa-li fab fa-aws"></i>
                            AWS &amp; Cloud Infrastructure
                        </li>
                        <li>
                            <i class="fa-li fab fa-docker"></i>
                            Docker &amp; Containerisation
                        </li>
                        <li>
                            <i class="fa-li fa fa-chart-line"></i>
                            Scaling &amp; Performance Optimization
                        </li>
                    </ul>
                </div>
                <ul class="list-inline dev-icons mt-4">
                    <li class="list-inline-item">
                        <i class="fab fa-laravel" title="Laravel"></i>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-symfony" title="Symfony"></i>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-wordpress" title="Wordpress"></i>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-php" title="Php"></i>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-js-square" title="Javascript"></i>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-html5" title="Html5"></i>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-angular" title="Angular"></i>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-react" title="React"></i>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-node-js" title="nodejs"></i>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-sass" title="Sass"></i>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-gulp" title="Gulp"></i>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-npm" title="NPM"></i>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-aws" title="AWS"></i>
                    </li>
                    <li class="list-inline-item">
                        <i class="fab fa-linux" title="Linux"></i>
                    </li>
                </ul>
            </div>
        </section>

        <hr class="m-0">

        <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
            <div class="w-100">
                <h2 class="mb-5">Key Projects</h2>

                <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5" id="idencytime">
                    <div class="resume-content">
                        <div class="d-flex justify-content-between">
                            <div class="resume-heading mb-3">
                                <h3 class="mb-0">IdencyTime</h3>
                                <div class="subheading">Freelance Developer</div>
                                <p class="lead"><a target="_blank" rel="noreferrer" href="https://idency.com/products/authentication/time-and-attendance-systems/idencytime/">Visit</a></p>
                            </div>

                            <div class="resume-date font-weight-bold text-md-right">
                                <span class="text-primary">2024 - Present</span>
                            </div>
                        </div>

                        <p>
                            IdencyTime is a multi-tenant time and attendance management system built with Laravel and Filament.
                            The system manages staff clock in/out records from biometric devices and integrates with HR systems including PeopleHR, SageHR,
                            and CezanneHR.
                        </p>

                        <p>As the development lead on the project, I'm responsible for the overall architecture, development, and maintenance of the system, and I'm also involved in decision-making and planning on the product's direction.</p>

                        <p>
                            Key features include multiple devices/device vendors, real-time device synchronization, automated clock registration
                            and staff matching, multi-timezone support, evacuation
                            reporting for safety compliance, and comprehensive admin panel built with Filament for managing customers,
                            staff, devices, locations, and departments.
                        </p>

                        <p>
                            The system is built with Laravel, uses Filament for the admin interface, uses Laravel Horizon queues, and has high levels of test coverage with PHPUnit and meets PHPStan level 8
                            static analysis.
                        </p>
                    </div>
                </div>

                <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5" id="myschoolwellbeing">
                    <div class="resume-content">
                        <div class="d-flex justify-content-between">
                            <div class="resume-heading mb-3">
                                <h3 class="mb-0">The Headteacher's Report &amp; mySchoolWellbeing</h3>
                                <div class="subheading">Freelance Developer</div>
                                <p class="lead"><a target="_blank" rel="noreferrer" href="https://www.theheadteachersreport.com/">Visit</a></p>
                            </div>

                            <div class="resume-date font-weight-bold text-md-right">
                                <span class="text-primary">2016 - Present</span>
                            </div>
                        </div>
                        <p>
                            Two projects for the same startup:
                        </p>
                        <ul>
                            <li>The Headteacher's report provides reporting services to headteachers and the wider school management to help them meet their obligations to their governors, education authorities, and parents.</li>
                            <li>mySchoolWellbeing provides digital services to help schools discover, track and drive improvement to the wellbeing of staff, parents, and pupils.</li>
                        </ul>

                        <p>
                            The Headteacher's report is a system that automates the production of reports based on data drawn from publicly
                            available datasets issued by the Department for Education alongside data from schools' own MIS systems.
                            This is a computationally intensive task - so a key challenge is to manage costs whilst still providing
                            fast turnaround. This is achieved with workload prioritisation and infrastructure scaling using EC2
                            instances supported by containerised services to provide near-instant 'burstable' capacity. I am also responsible for the web portal used day to day by customers - features include access to the reports,
                            subscription management, and configuration of certain aspects of the reports.
                        </p>

                        <p>
                            mySchoolWellbeing at it's heart is a surveying tool that allows schools to periodically collect a dataset from each group (staff, parents, pupils) of stakeholders.
                            This data is then used to monitor and track wellbeing within the school through a data portal comprising customised reports and charting. As with the Headteacher's report, there is again a heavy dependency on data being drawn in from dfe datasets and schools' own systems.
                        </p>
                    </div>
                </div>

                <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5" id="applied-change">
                    <div class="resume-content">
                        <div class="d-flex justify-content-between">
                            <div class="resume-heading mb-3">
                                <h3 class="mb-0">Applied Change - Change Journey Navigator</h3>
                                <div class="subheading">Freelance Developer</div>
                                <p class="lead"><a target="_blank" rel="noreferrer" href="https://app.appliedchange.co.uk/">Visit</a></p>
                            </div>

                            <div class="resume-date font-weight-bold text-md-right">
                                <span class="text-primary">2020 - Present</span>
                            </div>
                        </div>

                        <p>Applied Change are a data led change management consultancy, the Change Journey Navigator is an online software product to help deliver this service.</p>

                        <p>
                            In essence, the project is a startup, I am responsible for the entirety of the system - the system design and development, as well as the server infrastructure and it's day to day operation.
                            The system centres around a tool for asking stakeholders a curated set of questions. Behind the scenes these are all carefully grouped and categorised which allows
                            analysis of the results against the Applied Change Model. The results of the survey are delivered through a reporting 'dashboard' that allows Applied Change to analyse the results in real time,
                            including the ability to dig into and compare data across different aspects of the 'model' as well as between locations, business groups and time periods. This in turn helps businesses to
                            understand what is and is not working and why, ultimately enabling them to drive change. The cycle can then be repeated to track progress and measure the impact of the change.
                        </p>

                        <p>
                            The product is multi tenant - Applied Change use it, but they also provide the software to other change practioners to use with their clients; consequently it is multi-tenanted
                            with all that goes with that - for example user management, account levels, billing, and security.
                        </p>
                    </div>
                </div>

                <div class="resume-item justify-content-between mb-5">
                    <div class="resume-content">
                        <div class="d-flex justify-content-between">
                            <div class="resume-heading mb-3">
                                <h3 class="mb-0">The Adventurists</h3>
                                <div class="subheading">Freelance Developer</div>
                                <p class="lead"><a target="_blank" rel="noreferrer" href="https://www.theadventurists.com/">Visit</a></p>
                            </div>

                            <div class="resume-date font-weight-bold text-md-right">
                                <span class="text-primary">2013 - 2023</span>
                            </div>
                        </div>

                        <p>
                            The Adventurists are a fast moving travel operator. I co-lead the development team responsible for the tracking, administration, and ecommerce software that underpins the company's operations.
                        </p>
                        <p>This includes:</p>
                        <ul>
                            <li>Tracking maps provided for the public to track participants in real time alongside curated social media posts. This is required to cope with huge traffic spikes generated by mainstream media coverage of events, achieved using a caching strategy based on pre-rendering all key assets and API endpoints to Varnish/Cloudflare with an invalidation strategy to manage content updates.</li>
                            <li>Alongside the public maps, the system includes mission critical real time tooling used by on the ground teams to track participants by GPS and coordinate emergency medical/evacuation response when required.</li>
                            <li>Ecommerce solution which has to provide flexibility to cover a range of events with different payment mechanisms and legal issues whilst coping with 'surge' traffic when in demand events go on sale.</li>
                            <li>Responsibility for all server infrastructure and testing/CI processes.</li>
                        </ul>
                    </div>
                </div>

                <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="resume-content">
                        <div class="d-flex justify-content-between">
                            <div class="resume-heading mb-3">
                                <h3 class="mb-0">The Visa Machine</h3>
                                <div class="subheading">Contract Developer</div>
                                <p class="lead"><s>Visit</s> (link no longer live)</p>
                            </div>

                            <div class="resume-date font-weight-bold text-md-right">
                                <span class="text-primary">2012 - 2020</span>
                            </div>
                        </div>

                        <p>I lead the development team responsible for developing and maintaining the software used by this multi-national online visa application service.</p>

                        <p>
                            A key component is a decision engine that recommends the most appropriate visa for your trip based on facts such as where you are going, how long for, and what for - from over 10,000 configured products. This ties in with a multi-channel ecommerce system that allows The Visa Machine and over 100 partners/resellers to sell products, each with a customisable product range and pricing alongside differing commercial arrangements.
                        </p>

                        <p>We also deliver the backend system used by staff across four global offices to administer procurement and delivery of visas and management of the product catalogue.</p>

                        <p>
                            Legacy management is a key component on this project as well. We regularly review/assess the state of the system, flagging where we have to make upgrades for security
                            or operational reasons. I also identify and make recommendations when other opportunities to make upgrades
                            arise and are commercially sensible.
                        </p>

                        <p>I’m also responsible for all server infrastructure and devops processes.</p>
                    </div>
                </div>

                <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="resume-content">
                        <div class="d-flex justify-content-between">
                            <div class="resume-heading">
                                <h3 class="mb-0">Various Digital Agencies</h3>
                                <div class="subheading mb-3">Lead Developer / Freelance Developer</div>
                            </div>
                        </div>

                        <p>
                            I provide outsource development support to a number of agencies, usually taking on specific projects
                            outside the in-house skillset or capacity. I have occasionally filled in as a part time lead developer (I was previously a full time lead within a digital agency)
                            providing support and consultancy to in-house development teams.
                        </p>
                        <p>
                            Projects have been all shapes and sizes - including ecommerce, management systems, WordPress plugins, security audits, performance consultancy, server migrations, and mobile applications.
                        </p>
                        <p>End clients have included British American Tobacco, Currys PC World, Diageo, Lindt, Nestle, Liverpool FC and Oxford University.</p>
                    </div>
                </div>

                <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5" id="data-sync">
                    <div class="resume-content">
                        <div class="d-flex justify-content-between">
                            <div class="resume-heading">
                                <h3 class="mb-0">Data Sync / Process Automation</h3>
                                <div class="subheading mb-3">Freelance Developer</div>
                            </div>
                        </div>

                        <p>I take on smaller/ad-hoc development tasks to address specific problems businesses have - loosely within the realm of process automation.</p>
                        <p>Examples include syncing orders between websites and accounting software; customised reporting; syncing stock levels between warehousing and ecommerce; integration with Amazon Vendor Central.</p>
                    </div>
                </div>
            </div>
        </section>

        <hr class="m-0">

        <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
            <div class="w-100">
                <h2 class="mb-5">Education</h2>

                <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div class="resume-content">
                        <h3 class="mb-0">University of Oxford</h3>
                        <div class="subheading mb-3">MA</div>
                        <div class="lead">Biological Sciences</div>
                    </div>
                    <div class="resume-date font-weight-bold text-md-right">
                        <span class="text-primary">2005</span>
                    </div>
                </div>
            </div>
        </section>

        <hr class="m-0">

        <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="contact">
            <div class="w-100">
                <h2 class="mb-5">Get in Touch</h2>
                <p class="lead mb-4">
                    Have a project in mind? I work with clients across <strong>Bath, Bristol, and Wiltshire</strong>, and throughout the UK.
                    Whether you need a full software product built, help scaling an existing system, or technical expertise for a specific challenge, let's talk.
                </p>

                <div class="row">
                    <div class="col-md-6 mb-4">
                        <h4 class="mb-3">Contact Details</h4>
                        <p>
                            <i class="fa fa-phone mr-2"></i>
                            <a href="tel:{{ preg_replace('/\s+/', '', $page->phone) }}">{{ $page->phone }}</a>
                        </p>
                        <p>
                            <i class="fa fa-envelope mr-2"></i>
                            <a href="mailto:{{ $page->email }}">{{ $page->email }}</a>
                        </p>
                        <p class="mt-4">
                            <i class="fa fa-map-marker-alt mr-2"></i>
                            Based in Wiltshire, near Bath<br>
                            <small class="text-muted">Serving Bath, Bristol, Wiltshire &amp; UK-wide</small>
                        </p>
                        <p class="mt-3 small text-muted">
                            Ben Lumley, Interoke Digital
                        </p>
                    </div>
                    <div class="col-md-6">
                        <h4 class="mb-3">Send a Message</h4>
                        @include('_partials.contact-form')
                    </div>
                </div>
            </div>
        </section>
    </div>
@endsection
