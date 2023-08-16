document.addEventListener('DOMContentLoaded', function () {
  function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
      window.scrollTo({
        behavior: 'smooth',
        top: element.getBoundingClientRect().top + window.scrollY - 50,
      });
    }
  }

  document.querySelector('a[href="index.html#about"]').addEventListener('click', function (e) {
    e.preventDefault();
    smoothScroll('.about-section');
  });
});

