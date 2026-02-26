let current = 0;
const pages = document.querySelectorAll('.page');

function showPage(index) {
  pages.forEach(p => p.classList.remove('active'));
  pages[index].classList.add('active');
  current = index;
}

function nextPage() {
  if(current < pages.length - 1) {
    showPage(current + 1);
  }
}

function prevPage() {
  if(current > 0) {
    showPage(current - 1);
  }
}

function goTo(index) {
  showPage(index);
}

const glow = document.querySelector('.cursor-glow');
document.addEventListener('mousemove', e => {
  if(window.innerWidth > 768){
    glow.style.left = e.pageX + 'px';
    glow.style.top = e.pageY + 'px';
  }
});
