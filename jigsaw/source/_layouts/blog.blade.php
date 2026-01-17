@extends('_layouts.master')

@php
    $postUrl = rtrim($page->siteUrl, '/') . '/blog/' . $page->slug;
    $publishedDate = date('c', strtotime($page->date));
    $formattedDate = date('j F Y', strtotime($page->date));
    $articleSchema = [
        '@context' => 'https://schema.org',
        '@type' => 'Article',
        'headline' => $page->title,
        'description' => $page->description,
        'image' => rtrim($page->siteUrl, '/') . '/og-image.jpg',
        'datePublished' => $publishedDate,
        'dateModified' => $publishedDate,
        'author' => [
            '@type' => 'Person',
            'name' => $page->firstName . ' ' . $page->lastName,
            'url' => $page->siteUrl,
        ],
        'publisher' => [
            '@type' => 'Organization',
            'name' => 'Interoke Digital',
            'url' => $page->siteUrl,
            'logo' => [
                '@type' => 'ImageObject',
                'url' => rtrim($page->siteUrl, '/') . '/icon.png',
            ],
        ],
        'mainEntityOfPage' => [
            '@type' => 'WebPage',
            '@id' => $postUrl,
        ],
    ];
@endphp

@section('structuredData')
    <script type="application/ld+json">{!! json_encode($articleSchema, JSON_UNESCAPED_SLASHES) !!}</script>
@endsection

@section('content')
    @include('_partials.sidebar')
    <div class="container-fluid p-0">
        <section class="resume-section p-3 p-lg-5 d-flex align-items-center">
            <div class="w-100">
                <div class="mb-4">
                    <a href="/blog" class="text-muted">
                        <i class="fa fa-arrow-left mr-2"></i>Back to Blog
                    </a>
                </div>

                <article itemscope itemtype="https://schema.org/Article">
                    <h1 class="mb-3" itemprop="headline">{{ $page->title }}</h1>
                    <div class="text-muted mb-4">
                        <i class="fa fa-calendar mr-2"></i>
                        <time datetime="{{ $publishedDate }}" itemprop="datePublished">{{ $formattedDate }}</time>
                    </div>

                    <div class="blog-content" itemprop="articleBody">
                        @yield('postContent')
                    </div>

                    <hr class="my-5">

                    <div class="text-center">
                        <a href="/blog" class="btn btn-outline-primary mr-3">
                            <i class="fa fa-list mr-2"></i>All Posts
                        </a>
                        <a href="/#contact" class="btn btn-primary">
                            <i class="fa fa-envelope mr-2"></i>Get in Touch
                        </a>
                    </div>
                </article>
            </div>
        </section>
    </div>
@endsection
