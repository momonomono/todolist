<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    @viteReactRefresh
    @vite(['resources/js/app.jsx', 'resources/sass/app.scss'])
    <title>Document</title>
</head>
<body>
    <div class="l-container">
        <article class="u-mt-10" id="form"></div>
    </div>
</body>
</html>