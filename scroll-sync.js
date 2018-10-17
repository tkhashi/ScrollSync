javascript:(() => {
  let oldX = 0, oldY = 0, adjX = 0, adjY = 0, ctrlcount = 0;
  const message = 'input URL to side-open (same origin) / to adjust: press ctrl-key twise on original window, adjust, press ctrl-key once more.';
  const sideurl = window.prompt(message, '');
  if (!sideurl) {
    return;
  }
  document.addEventListener('keydown', e => {
    /* console.log({keydown: 1, ctrlcount}); */
    if (e.key !== 'Control') {
      if (ctrlcount !== 2) {
        ctrlcount = 0;
      }
      return;
    }
    if (ctrlcount === 0) {
      ctrlcount += 1;
      console.log('to adjust-mode, press ctrl-key once more');
    }
    else if (ctrlcount === 1) {
      ctrlcount += 1;
      oldX = window.scrollX;
      oldY = window.scrollY;
      console.log('>> adjust-mode << : to submit, press ctrl-key once more');
    }
    else {
      adjX = oldX - window.scrollX;
      adjY = oldY - window.scrollY;
      console.log('adjusted! : to adjust-mode, press ctrl-key twise');
      ctrlcount = 0;
    }
    /* console.log({end: 1, oldX, oldY, adjX, adjY, ctrlcount}); */
  });
  /* open new window (not new tab) */
  const sidewindow = window.open(sideurl, '_blank', 'width');
  document.addEventListener('scroll', e => {
    /* console.log({scroll: 1, ctrlcount}); */
    if (ctrlcount === 2) {
      return;
    }
    sidewindow.scrollTo(window.scrollX + adjX, window.scrollY + adjY);
  });
})()
