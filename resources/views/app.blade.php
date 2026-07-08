<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no">
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Expires" content="0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="theme-color" content="#0f766e">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="default">
    <meta name="apple-mobile-web-app-title" content="WinMax App">
    <meta name="application-name" content="WinMax App">
    <meta name="format-detection" content="telephone=no">
    <meta name="HandheldFriendly" content="true">

    <title>WinMax - App</title>

    @vite(['resources/js/src/main.js'])

    <link rel="manifest" href="{{ asset('manifest.webmanifest') }}">
    <link rel="shortcut icon" href="{{ asset('favicon.ico') }}">
    <link rel="icon" href="{{ asset('favicon.ico') }}" sizes="any">
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('images/winmax-90e19e7f41d823ab49c83617de39c94d.png') }}">
    <link rel="apple-touch-startup-image" href="{{ asset('images/winmax-90e19e7f41d823ab49c83617de39c94d.png') }}">

    <link href="https://fonts.googleapis.com/css?family=Nunito:400,600,700" rel="stylesheet">
    <style>
        .la-ball-circus {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 24px;
            height: 32px;
        }

        .la-ball-circus > div {
            width: 8px;
            height: 8px;
            margin: 0 2px;
            background: #4361ee;
            border-radius: 50%;
            animation: circus-bounce 1s infinite alternate;
        }

        .la-ball-circus > div:nth-child(2) { animation-delay: 0.2s; }
        .la-ball-circus > div:nth-child(3) { animation-delay: 0.4s; }
        .la-ball-circus > div:nth-child(4) { animation-delay: 0.6s; }
        .la-ball-circus > div:nth-child(5) { animation-delay: 0.8s; }

        @keyframes circus-bounce {
            0% { transform: translateY(0); }
            100% { transform: translateY(-10px); }
        }
        /* Example inline style for loading indicator */
        #loading-indicator {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(255,255,255,0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            font-size: 2rem;
            color: #333;
        }
    </style>
</head>

<body>
    <noscript>
        <strong>We're sorry but Cork doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>

    <div id="app"></div>
</body>
</html>
