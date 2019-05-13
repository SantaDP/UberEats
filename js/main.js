// scroll-TOP

const btn = document.querySelector('.scroll-top');
window.onscroll = () => {
  if (window.pageYOffset < 900) {
    btn.style.display = 'none';
  } else {
    btn.style.display = 'block';
  }
}

btn.addEventListener('click', event => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
})
