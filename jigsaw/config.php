<?php

return [
    'baseUrl' => '',
    'production' => false,
    'siteTitle' => 'Interoke Digital | Full-Stack Developer | Bath, Bristol, Wiltshire',
    'siteDescription' => 'Ben Lumley - Full-stack developer in Bath, Bristol, and Wiltshire. Specialising in Laravel, backend development, and scaling solutions. Building software products for businesses of all sizes. Web developer and software developer services.',
    'siteUrl' => 'https://www.interokedigital.co.uk',
    'email' => 'hello@interokedigital.co.uk',
    'phone' => '07732 806321',
    'firstName' => 'Ben',
    'lastName' => 'Lumley',
    'metaKeywords' => 'Ben Lumley, freelance developer, full-stack developer, laravel developer, startup developer, bath developer, bristol developer, wiltshire developer, php developer, backend developer, software developer, web developer',
    'location' => [
        'city' => 'Bath',
        'region' => 'Wiltshire',
        'country' => 'England',
        'areas' => ['Bath', 'Bristol', 'Wiltshire', 'UK'],
    ],
    'socialLinks' => [
        [
            'icon' => 'fa-github',
            'name' => 'Github',
            'url' => 'https://github.com/benlumley',
        ],
        [
            'icon' => 'fa-linkedin-in',
            'name' => 'Linkedin',
            'url' => 'https://linkedin.com/in/benlumley/',
        ],
        [
            'icon' => 'fa-stack-overflow',
            'name' => 'StackOverflow',
            'url' => 'https://stackoverflow.com/users/39161/benlumley',
        ],
    ],
    'googleAnalyticsId' => getenv('JIGSAW_GA_ID') ?: '',
];
