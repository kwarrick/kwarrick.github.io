(function () {

  // Add '.full-width' class to overflowing code blocks.
  let nodelist = document.querySelectorAll('.post-content > .highlighter-rouge');
  Array.prototype.slice
    .call(nodelist)
    .filter(el => el.clientWidth < el.scrollWidth)
    .map(el => el.classList.add('full-width'));

})();
