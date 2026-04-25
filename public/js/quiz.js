/* ─── Quiz — answer checking & score ─── */
(function () {

  document.querySelectorAll('.quiz-carousel').forEach(function (carousel) {
    var total = parseInt(carousel.getAttribute('data-total'), 10);
    var dots = carousel.querySelectorAll('.quiz-dot');

    /* ---- Answer handling ---- */
    carousel.querySelectorAll('.quiz-card').forEach(function (card) {
      var options = card.querySelectorAll('.quiz-option');

      options.forEach(function (btn) {
        btn.addEventListener('click', function () {
          if (card.classList.contains('answered')) return;
          card.classList.add('answered');

          var isCorrect = btn.getAttribute('data-correct') === 'true';

          /* Disable all options */
          options.forEach(function (b) { b.disabled = true; });

          if (isCorrect) {
            btn.classList.add('quiz-option--correct');
            card.querySelector('.quiz-card_feedback--correct').classList.add('show');
          } else {
            btn.classList.add('quiz-option--wrong');
            card.querySelector('.quiz-card_feedback--wrong').classList.add('show');
            /* Reveal correct answer */
            options.forEach(function (b) {
              if (b.getAttribute('data-correct') === 'true') {
                b.classList.add('quiz-option--reveal');
              }
            });
          }

          /* Mark dot as answered */
          var slideIndex = Array.from(carousel.querySelectorAll('.carousel-item')).indexOf(card.closest('.carousel-item'));
          if (dots[slideIndex]) dots[slideIndex].classList.add('answered');

          /* Check if all answered */
          checkAllAnswered(carousel, total);
        });
      });
    });
  });

  /* ---- Score calculation ---- */
  function checkAllAnswered(carousel, total) {
    var answered = carousel.querySelectorAll('.quiz-card.answered');
    if (answered.length < total) return;

    var correct = 0;
    answered.forEach(function (c) {
      if (c.querySelector('.quiz-option--correct')) correct++;
    });

    var scoreEl = carousel.querySelector('.quiz-score');
    var numEl = scoreEl ? scoreEl.querySelector('.quiz-score_num') : null;
    if (numEl) numEl.textContent = correct;
    if (scoreEl) scoreEl.classList.add('show');
  }

})();

const carousel = document.getElementById('quizCarouselS1');
const totalSlides = parseInt(carousel.dataset.total);
const prevBtn = carousel.querySelector('[data-bs-slide="prev"]');
const nextBtn = carousel.querySelector('[data-bs-slide="next"]');

// Hide "Previous" on the first slide
prevBtn.style.display = 'none';

carousel.addEventListener('slid.bs.carousel', (e) => {
  prevBtn.style.display = e.to === 0 ? 'none' : '';
  nextBtn.style.display = e.to === totalSlides - 1 ? 'none' : '';
});