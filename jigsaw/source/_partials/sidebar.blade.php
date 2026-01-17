@php
    $tabs = [
        ['content' => 'About', 'href' => 'about', 'isAnchor' => true],
        ['content' => 'Skills', 'href' => 'skills', 'isAnchor' => true],
        ['content' => 'Projects', 'href' => 'experience', 'isAnchor' => true],
        ['content' => 'Education', 'href' => 'education', 'isAnchor' => true],
        ['content' => 'Contact', 'href' => 'contact', 'isAnchor' => true],
        ['content' => 'Blog', 'href' => '/blog', 'isAnchor' => false],
    ];
    $isBlogPage = $page->isBlogPage ?? false;
@endphp

<nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="sideNav">
    <a class="navbar-brand" href="/#page-top">
        <span class="d-block mb-lg-4 id-logo">
            <img
                class="img-fluid mx-auto"
                src="/assets/img/interokedigitalwhitetrans.png"
                alt="Interoke Digital"
            >
        </span>
        <span class="d-none d-lg-block mb-4">
            <img
                class="img-fluid img-profile rounded-circle mx-auto"
                src="/assets/images/avatar.jpg"
                alt="Ben Lumley"
            >
        </span>
    </a>
    <button
        class="navbar-toggler navbar-toggler-right collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
    >
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
            @foreach ($tabs as $tab)
                @php
                    $isAnchor = $tab['isAnchor'];
                    $href = $tab['href'];
                    $link = $isAnchor && $isBlogPage ? "/#{$href}" : ($isAnchor ? "#{$href}" : $href);
                    $isActive = $isBlogPage && !$isAnchor && $href === '/blog';
                @endphp
                <li class="nav-item">
                    <a class="nav-link {{ $isActive ? 'active' : '' }}" href="{{ $link }}">
                        {{ $tab['content'] }}
                    </a>
                </li>
            @endforeach
        </ul>
    </div>
</nav>
