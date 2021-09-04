# ScrollSync
Vivaldiのコマンドチェイン機能で利用する前提のスクリプトです。  
縦長のページを鳥瞰したり、一度に多くの情報を見たい場合に役立ちます。

# Description
* 同時に3つのタブが開き、スタック、タイリング
* タブスクロールが連動

# Demo
![CmdChain-SnakeTile](https://user-images.githubusercontent.com/66816003/132108289-d05602da-8a04-43d3-94c4-7e9fb6de5e3f.gif)

# Usage
1. 下記BookmarkLetをVivaldiのコマンドチェイン設定画面に利用します。  
```javascript
javascript:javascript:(()=>{const sideUrl=location.href;let windowHeight=window.innerHeight;let documentHeigth=document.documentElement.scrollHeight;let numberWinHeight=Math.floor(documentHeigth/windowHeight);let TileCount=numberWinHeight;async function Func(sideTab,scrollSize){sideTab=window.open(sideUrl);const _sleep=(ms)=>new Promise((resolve)=>setTimeout(resolve,ms));await _sleep(2000);let startHeight=window.scrollY+windowHeight*0.8*(scrollSize);sideTab.scrollTo(0,startHeight);let adjX=sideTab.scrollX-window.scrollX;let adjY=sideTab.scrollY-window.scrollY;document.addEventListener('scroll',e=>{sideTab.scrollTo(window.scrollX+adjX,window.scrollY+adjY)});sideTab.addEventListener('scroll',e=>{adjX=sideTab.scrollX-window.scrollX;adjY=sideTab.scrollY-window.scrollY})}if(TileCount>0){let tab1;Func(tab1,1)}if(TileCount>1){let tab2;Func(tab2,2)}})();void(0);
```
3. 「現在のタブで開く」のパラメータに指定します。  
4. その他も画像の通り設定します。
![snaketileスクリーンショット 2021-09-05 054734](https://user-images.githubusercontent.com/66816003/132108282-9993f1c2-9214-4865-b659-03d083ed1e83.png)

通信状況が悪かったり、重いページで実行するとページの読み込みを待たずして次のコマンドに移ってしまうので  
設定の遅延パラメータを適当に大きく設定するなどして対応してください。  

開いたタブの初期スクロール位置がおかしい時はjsのsleep()を大きくして遅延させるなどすると改善する可能性があります。
