<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ensonhaber</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f8f9fa;
        }
        header {
            background-color: #343a40;
            color: white;
            padding: 20px 0;
            text-align: center;
            position: sticky;
            top: 0;
            z-index: 1000;
        }
        nav {
            background-color: #495057;
            overflow: hidden;
        }
        nav a {
            float: left;
            display: block;
            color: white;
            text-align: center;
            padding: 14px 20px;
            text-decoration: none;
            transition: background-color 0.3s, color 0.3s;
            cursor: pointer;
        }
        nav a:hover {
            background-color: #ced4da;
            color: #495057;
        }
        .content {
            padding: 20px;
        }
        .article {
            background-color: white;
            margin: 20px 0;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s;
        }
        .article:hover {
            transform: translateY(-5px);
        }
        .article h2 {
            color: #343a40;
        }
        .article p {
            color: #6c757d;
        }
        footer {
            background-color: #343a40;
            color: white;
            text-align: center;
            padding: 20px 0;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
        @media (max-width: 768px) {
            nav a {
                float: none;
                text-align: center;
                padding: 10px;
                border-bottom: 1px solid #ced4da;
            }
            nav a:last-child {
                border-bottom: none;
            }
        }
    </style>
</head>
<body>
    <header>
        <h1>Ensonhaber</h1>
    </header>
    <nav>
        <a onclick="showContent('home')">Ana Sayfa</a>
        <a onclick="showContent('gundem')">Gündem</a>
        <a onclick="showContent('spor')">Spor</a>
        <a onclick="showContent('magazin')">Magazin</a>
        <a onclick="showContent('ekonomi')">Ekonomi</a>
    </nav>
    <div class="content">
        <div id="home" class="section">
            <div class="article">
                <h2>Ana Sayfa Başlık 1</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel risus ac justo venenatis facilisis. Quisque nec justo ac quam eleifend cursus.</p>
            </div>
            <div class="article">
                <h2>Ana Sayfa Başlık 2</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel risus ac justo venenatis facilisis. Quisque nec justo ac quam eleifend cursus.</p>
            </div>
            <div class="article">
                <h2>Ana Sayfa Başlık 3</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel risus ac justo venenatis facilisis. Quisque nec justo ac quam eleifend cursus.</p>
            </div>
        </div>
        <div id="gundem" class="section" style="display:none;">
            <div class="article">
                <h2>Gündem Başlık 1</h2>
                <p>Gündem içeriği burada yer alacak.</p>
            </div>
        </div>
        <div id="spor" class="section" style="display:none;">
            <div class="article">
                <h2>Spor Başlık 1</h2>
                <p>Spor içeriği burada yer alacak.</p>
            </div>
        </div>
        <div id="magazin" class="section" style="display:none;">
            <div class="article">
                <h2>Magazin Başlık 1</h2>
                <p>Magazin içeriği burada yer alacak.</p>
            </div>
        </div>
        <div id="ekonomi" class="section" style="display:none;">
            <div class="article">
                <h2>Ekonomi Başlık 1</h2>
                <p>Ekonomi içeriği burada yer alacak.</p>
            </div>
        </div>
    </div>
    <footer>
        <p>&copy; 2024 Ensonhaber. Tüm hakları saklıdır.</p>
    </footer>

    <script>
        function showContent(sectionId) {
            var sections = document.getElementsByClassName('section');
            for (var i = 0; i < sections.length; i++) {
                sections[i].style.display = 'none';
            }
            document.getElementById(sectionId).style.display = 'block';
        }
        // Default olarak Ana Sayfa içeriklerini göster
        showContent('home');
    </script>
</body>
</html>
