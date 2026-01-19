<!DOCTYPE html>
<html lang="en">
@php
    $siteTitle = $page->title ?? $page->siteTitle;
    $siteDescription = $page->description ?? $page->siteDescription;
    $baseUrl = $page->baseUrl ?: $page->siteUrl;
    $path = $page->getPath();
    $canonicalUrl = $page->canonical ?? rtrim($baseUrl, '/') . ($path === '/' ? '/' : $path);
    $siteImage = $page->image ?? rtrim($page->siteUrl, '/') . '/og-image.jpg';
    $location = is_array($page->location ?? []) ? ($page->location ?? []) : (array)($page->location ?? []);

    $structuredData = [
        '@context' => 'https://schema.org',
        '@type' => 'Person',
        'name' => $page->firstName . ' ' . $page->lastName,
        'jobTitle' => 'Full-Stack Developer',
        'worksFor' => [
            '@type' => 'Organization',
            'name' => 'Interoke Digital',
            'url' => $page->siteUrl,
            'address' => [
                '@type' => 'PostalAddress',
                'addressLocality' => $location['city'] ?? 'Bath',
                'addressRegion' => $location['region'] ?? 'Wiltshire',
                'addressCountry' => $location['country'] ?? 'GB',
            ],
            'areaServed' => $location['areas'] ?? ['Bath', 'Bristol', 'Wiltshire', 'UK'],
        ],
        'email' => $page->email,
        'telephone' => $page->phone,
        'url' => $page->siteUrl,
        'sameAs' => array_map(function ($link) {
            return $link['url'];
        }, is_array($page->socialLinks) ? $page->socialLinks : iterator_to_array($page->socialLinks)),
        'knowsAbout' => [
            'Laravel',
            'PHP',
            'Backend Development',
            'Full-Stack Development',
            'Software Development',
            'Startup Development',
        ],
    ];
@endphp
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>{{ $siteTitle }}</title>
    <link rel="canonical" href="{{ $canonicalUrl }}">
    <meta name="description" content="{{ $siteDescription }}">
    <meta name="keywords" content="{{ $page->metaKeywords }}">
    <meta name="author" content="{{ $page->firstName }} {{ $page->lastName }}">
    <meta name="geo.region" content="GB-WIL">
    <meta name="geo.placename" content="Bath">

    <meta property="og:type" content="website">
    <meta property="og:title" content="{{ $siteTitle }}">
    <meta property="og:description" content="{{ $siteDescription }}">
    <meta property="og:url" content="{{ $canonicalUrl }}">
    <meta property="og:image" content="{{ $siteImage }}">
    <meta property="og:locale" content="en_GB">
    <meta property="og:site_name" content="Interoke Digital">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{{ $siteTitle }}">
    <meta name="twitter:description" content="{{ $siteDescription }}">
    <meta name="twitter:image" content="{{ $siteImage }}">

    <link rel="icon" href="/assets/img/icon-grey.png">
    <link rel="stylesheet" href="/assets/build/css/resume.css">

    <script type="application/ld+json">{!! json_encode($structuredData, JSON_UNESCAPED_SLASHES) !!}</script>
    @yield('structuredData')

    @if (!empty($page->googleAnalyticsId))
        <script async src="https://www.googletagmanager.com/gtag/js?id={{ $page->googleAnalyticsId }}"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '{{ $page->googleAnalyticsId }}');
        </script>
    @endif

    @yield('head')
</head>
<body id="page-top">
    <div class="main-body">
        @yield('content')
    </div>
    <script defer src="/assets/build/js/main.js"></script>
</body>
</html>
