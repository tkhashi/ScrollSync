javascript:(() => {
  const sideUrl = location.href;
  // get document info
  let windowHeight = window.innerHeight;

  async function Func(sideTab, scrollSize){
	sideTab = window.open(sideUrl);

	const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
	await _sleep(2000);

	//子タブの初期位置
	let startHeight = window.scrollY + windowHeight * 0.8 * (scrollSize);
	sideTab.scrollTo(0, startHeight);

	//親タブと子タブの差
	let adjX = sideTab.scrollX - window.scrollX;
	let adjY = sideTab.scrollY - window.scrollY;
	document.addEventListener('scroll', e => {
		//親タブ＋親と子の差
		sideTab.scrollTo(window.scrollX + adjX, window.scrollY + adjY);
	});
	sideTab.addEventListener('scroll', e => {
		//子タブのみスクロールした時は親子差更新
		adjX = sideTab.scrollX - window.scrollX;
		adjY = sideTab.scrollY - window.scrollY;
	})
  }

  let tab1;
  Func(tab1, 1);
  let tab2;
  Func(tab2, 2);
})();