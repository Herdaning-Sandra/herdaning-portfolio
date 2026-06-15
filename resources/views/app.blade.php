<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>
        Portfolio
    </title>

    <link rel="icon" type="image/png" href="/favicon.png" />

    <meta name="description"
        content="Portfolio of Herdaning Sandra Kumalasari showcasing web development, Laravel projects, UI/UX design case studies, and internship experiences." />

    <meta name="keywords"
        content="Herdaning Sandra Kumalasari, Web Developer, UI UX Designer, Laravel Developer, Portfolio, Frontend Developer" />

    <meta name="author" content="Herdaning Sandra Kumalasari" />

    <link rel="icon" type="image/png" href="/favicon.png" />

    <meta property="og:title" content="Herdaning Sandra Kumalasari Portfolio" />

    <meta property="og:description" content="Web Developer & UI/UX Designer Portfolio" />

    <meta property="og:image" content="/images/og-cover.png" />

    <meta property="og:type" content="website" />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
