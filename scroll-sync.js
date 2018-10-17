javascript:(() => {
  let adjX = 0, adjY = 0, ctrlcount = 0;
  const message = 'input URL to side-open (same origin) / to adjust: press ctrl-key twise on original window, adjust, press ctrl-key once more.';
  const sideurl = window.prompt(message, '');
  if (!sideurl) {
    return;
  }
  /* open new window (not new tab) */
  const sidewindow = window.open(sideurl, '_blank', 'width');

  document.addEventListener('keydown', e => {
    /* console.log('keydown', {ctrlcount}); */
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
      console.log('>> adjust-mode << : to submit, press ctrl-key once more');
    }
    else {
      adjX = sidewindow.scrollX - window.scrollX;
      adjY = sidewindow.scrollY - window.scrollY;
      console.log('adjusted! : to adjust-mode, press ctrl-key twise');
      ctrlcount = 0;
    }
    /* console.log('end', {adjX, adjY, ctrlcount}); */
  });
  document.addEventListener('scroll', e => {
    /* console.log('scroll', {ctrlcount, scrX: window.scrollX, adjX, scrY: window.scrollY, adjY}); */
    if (ctrlcount === 2) {
      return;
    }
    sidewindow.scrollTo(window.scrollX + adjX, window.scrollY + adjY);
  });
})()