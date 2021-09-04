javascript:(() => {
  let adjX = 0,
      adjY = 0;

  /** get URL */
  const sideUrl = location.href;

  //get several height
  let windowHeight = window.innerHeight;
  let documentHeigth = document.documentElement.scrollHeight;
  let numberWinHeight =Math.floor(documentHeigth/windowHeight);
  let TileCount = numberWinHeight > 3 ? 3 : numberWinHeight;
  for(i = 0; i < 1; i++){
    OpenNewTab(i + 1);
    console.log("open tab!");
  }

  function OpenNewTab(tileNumber){
    /** open new window (not new tab) */
    const sideTab = window.open(sideUrl, "aaa", "bbb");
    function ScrollTile(){
        sideTab.scrollTo(0, windowHeight * tileNumber);
        console.log("Scroll Done!!")
    }
    //sync scroll
    window.addEventListener('scroll', e => {
      adjX = sideTab.scrollX - window.scrollX;
      adjY = sideTab.scrollY - window.scrollY;
      console.log("adjY = " + adjY);
      console.log("window = " + window.scrollY);
      console.log("sidetab = " + sideTab.scrollY);
      sideTab.scrollTo(window.scrollX + adjX, window.scrollY + adjY);
    });
    window.setTimeout(ScrollTile, 1000);
  }
  

})();