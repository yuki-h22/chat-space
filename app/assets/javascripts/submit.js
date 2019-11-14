{/* <html lang="ja">
<head>
    <meta charset="utf-8">
    <title>jQueryの練習</title>
</head>
<body>
    <p>jQueryの練習</p>
    <button>Add!</button>
 */}
    // <script src="https://code.jquery.com/jquery-3.4.0.min.js"></script>
    // <script>
        $(function() {

            $('button').click(function() {
                // テキストが"add!!!"で"add"クラスを持つp要素をボタンの直前に追加する。
                var p = $('<p>').text('add!!!').addClass('add');
                $(this).before(p);
            });

            // このように書いてあげれば、うまく動作します！
            // jQueryオブジェクトの中は、$('body')ではなく$(document)としてもokです。
            $('body').on('click', '.add' , function() {
                $(this).remove();
            });

        });
    // </script>
// </body>
// </html>