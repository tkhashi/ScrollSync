# ScrollSync
Vivaldiのコマンドチェイン機能を活かしたjavascriptです。  
縦長のページを鳥瞰したり、一度に多くの情報を見たい場合に役立ちます。

# Description
* 同時に3つのタブが開き、スタック、タイリング
* タブスクロールが連動

# Demo
![CmdChain-SnakeTile](https://user-images.githubusercontent.com/66816003/132108289-d05602da-8a04-43d3-94c4-7e9fb6de5e3f.gif)

# Usage
当リポジトリのjsファイルをBookmarkLetに変換します。
変換したらVivaldiのコマンドチェイン設定画面にて「現在のタブで開く」のパラメータに指定します。
その他画像の通り設定します。
![snaketileスクリーンショット 2021-09-05 054734](https://user-images.githubusercontent.com/66816003/132108282-9993f1c2-9214-4865-b659-03d083ed1e83.png)

通信状況が悪かったり、重いページで実行するとページの読み込みを待たずして次のコマンドに移ってしまうので
設定の遅延パラメータを適当に大きく設定するなどして対応してください。

開いたタブの初期スクロール位置がおかしい時はjsのsleep()を大きくして遅延させるなどすると改善する可能性があります。
