javascript:(() => {
  let adjX = 0,
    adjY = 0;
  const NORMAL = 'NORMAL',
    CHECK = 'CHECK',
    ADJUST = 'ADJUST';
  const MODES = {
    NORMAL: {
      nextKey: CHECK,
      message: 'press Ctrl-key once more for adjust-mode',
    },
    CHECK: {
      nextKey: ADJUST,
      message: '>> adjust-mode << : press Ctrl-key once more to submit',
    },
    ADJUST: {
      nextKey: NORMAL,
      message: 'adjusted! : press Ctrl-key twise for adjust-mode',
    }
  };
  let modeKey = NORMAL;

  const promptMessage = [
    'input URL to side-open (same origin) / ',
    'to adjust: press ctrl-key twise on original window, adjust, press ctrl-key once more.'
  ].join('');

  /** get URL */
  const sideUrl = window.prompt(promptMessage, '');
  if (!sideUrl) {
    return;
  }

  /** open new window (not new tab) */
  const sideWindow = window.open(sideUrl, '_blank', 'width');

  document.addEventListener('keydown', e => {
    /* console.log('keydown', {modeKey}); */
    if (e.key !== 'Control') {
      /** ignore if not Ctrl-key */
      if (modeKey !== ADJUST) {
        /** reset count if not adjust-mode */
        modeKey = NORMAL;
      }
      return;
    }

    if (modeKey === ADJUST) {
      adjX = sideWindow.scrollX - window.scrollX;
      adjY = sideWindow.scrollY - window.scrollY;
    }
    console.info(MODES[modeKey].message);

    modeKey = MODES[modeKey].nextKey;
    /* console.log('end', {adjX, adjY, modeKey}); */
  });

  document.addEventListener('scroll', e => {
    /* console.log('scroll', {modeKey, scrX: window.scrollX, adjX, scrY: window.scrollY, adjY}); */
    if (modeKey === ADJUST) {
      /** dont scroll if adjust-mode */
      return;
    }
    sideWindow.scrollTo(window.scrollX + adjX, window.scrollY + adjY);
  });
})();
