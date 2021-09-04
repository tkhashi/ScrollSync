javascript:(() => {
  const sideUrl = location.href;
  // get document info
  let windowHeight = window.innerHeight;
  let documentHeigth = document.documentElement.scrollHeight;
  let numberWinHeight =Math.floor(documentHeigth/windowHeight);
  let TileCount = numberWinHeight > 3 ? 3 : numberWinHeight;

  async function Func(sideTab, scrollSize){
	sideTab = window.open(sideUrl);

	const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
	await _sleep(1000);

	let startHeight = window.scrollY + windowHeight * 0.8 * (scrollSize);
	sideTab.scrollTo(0, startHeight);

	let adjX = sideTab.scrollX - window.scrollX;
	let adjY = sideTab.scrollY - window.scrollY;
	document.addEventListener('scroll', e => {
		sideTab.scrollTo(window.scrollX + adjX, window.scrollY + adjY);
	});
  }
	if(TileCount > 0){
		let tab1;
		Func(tab1, 1);
	}
	if(TileCount> 1) {
		let tab2;
		Func(tab2, 2);
	}
	if(TileCount> 2) {
		let tab3;
		Func(tab3, 3);
	}
})();