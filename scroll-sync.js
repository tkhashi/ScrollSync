javascript:(() => {
  sideurl = window.prompt('URL to side-open (same origin)', '');
  if (!sideurl) {
    return false;
  }
  sidewindow = open(sideurl);
  document.addEventListener('scroll', e =>
    sidewindow.scrollTo(window.scrollX, window.scrollY)
  );
})();
