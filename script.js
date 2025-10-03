const progress = document.getElementById('progress');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let current = 1;

nextBtn.addEventListener('click', () => {
  if (current < circles.length) current++;
  update();
});

prevBtn.addEventListener('click', () => {
  if (current > 1) current--;
  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < current) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const activeCount = document.querySelectorAll('.circle.active').length;
  const pct = ((activeCount - 1) / (circles.length - 1)) * 100;
  progress.style.width = pct + '%';

  prevBtn.disabled = current === 1;
  nextBtn.disabled = current === circles.length;
}
