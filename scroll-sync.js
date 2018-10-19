javascript:(() => {
  let adjX = 0,
    adjY = 0;
  const NORMAL = 0,
    CHECK = 1,
    ADJUST = 2;
  let mode = 0;

  const promptMessage = [
    'input URL to side-open (same origin) / ',
    'to adjust: press ctrl-key twise on original window, adjust, press ctrl-key once more.'
  ].join('');

  const sideUrl = window.prompt(promptMessage, '');
  if (!sideUrl) {
    return;
  }

  /** open new window (not new tab) */
  const sideWindow = window.open(sideUrl, '_blank', 'width');

  document.addEventListener('keydown', e => {
    /* console.log('keydown', {mode}); */
    if (e.key !== 'Control') {
      /** ignore if not Ctrl-key */
      if (mode !== ADJUST) {
        /** reset count if not adjust-mode */
        mode = 0;
      }
      return;
    }

    if (mode === NORMAL) {
      console.log('press Ctrl-key once more for adjust-mode');
      mode = CHECK;
    }
    else if (mode === CHECK) {
      console.log('>> adjust-mode << : press Ctrl-key once more to submit');
      mode = ADJUST;
    }
    else {
      adjX = sideWindow.scrollX - window.scrollX;
      adjY = sideWindow.scrollY - window.scrollY;
      console.log('adjusted! : press Ctrl-key twise for adjust-mode');
      mode = NORMAL;
    }
    /* console.log('end', {adjX, adjY, mode}); */
  });
  document.addEventListener('scroll', e => {
    /* console.log('scroll', {mode, scrX: window.scrollX, adjX, scrY: window.scrollY, adjY}); */
    if (mode === ADJUST) {
      /** dont scroll if adjust-mode */
      return;
    }
    sideWindow.scrollTo(window.scrollX + adjX, window.scrollY + adjY);
  });
})()
