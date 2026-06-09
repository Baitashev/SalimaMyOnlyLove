const letterText = `Моя любимая Салима, эта страница — маленькое напоминание о большом чувстве. Я хочу, чтобы ты знала: что бы ни происходило вокруг, у тебя есть человек, который очень сильно любит тебя, верит в тебя и всегда хочет быть рядом. Ты не должна держать всё в себе одна. Я рядом — чтобы обнять, поддержать, выслушать, рассмешить и напомнить тебе, какая ты невероятная. Ты мой самый нежный человек, моя радость и моё спокойствие. Я люблю тебя всем сердцем.`;

const photos = [
  { src: 'images/photo1.jpg', caption: 'Тот самый момент, который хочется хранить' },
  { src: 'images/photo2.JPG', caption: 'Ты — мой любимый повод улыбаться' },
  { src: 'images/photo3.JPG', caption: 'С тобой даже обычный день становится особенным' },
  { src: 'images/photo4.JPG', caption: 'Моё сердце выбирает тебя снова и снова' },
  { src: 'images/photo5.jpg', caption: 'Когда рядом ты — в мире становится теплее' },
  { src: 'images/photo6.jpg', caption: 'Люблю тебя сильнее, чем могу написать' }
];

const supportMessages = [
  'Любимая, выдохни. Ты справишься. А я рядом — не только в хорошие моменты, но и тогда, когда тебе тяжело.',
  'Ты не обязана быть сильной каждую секунду. Иногда можно просто устать, а я всё равно буду любить тебя такой же сильно.',
  'Ты для меня очень ценная. Не из-за настроения, не из-за идеальности, а просто потому что ты — это ты.',
  'Я горжусь тобой. Даже если день был сложным, ты всё равно моя умничка и мой самый любимый человек.',
  'Когда тебе грустно, представь, что я обнимаю тебя крепко-крепко и тихо говорю: “я здесь, моя хорошая”.'
];

const gallery = document.getElementById('galleryGrid');
const modal = document.getElementById('photoModal');
const modalImage = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption');
const closeModal = document.getElementById('closeModal');
const typedTarget = document.getElementById('typedText');
const supportBtn = document.getElementById('supportBtn');
const supportText = document.getElementById('supportText');
const envelopeBtn = document.getElementById('envelopeBtn');
const secretMessage = document.getElementById('secretMessage');
const heartsLayer = document.getElementById('heartsLayer');

function typeWriter(text, element, speed = 28) {
  let i = 0;
  element.textContent = '';
  const timer = setInterval(() => {
    element.textContent += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(timer);
  }, speed);
}

function renderGallery() {
  gallery.innerHTML = photos.map((photo, index) => `
    <button class="photo-card" style="--tilt:${index % 2 === 0 ? '-1.6deg' : '1.4deg'}" data-index="${index}">
      <img src="${photo.src}" alt="${photo.caption}">
      <span class="photo-card__caption">${photo.caption}</span>
    </button>
  `).join('');

  document.querySelectorAll('.photo-card').forEach(card => {
    card.addEventListener('click', () => {
      const photo = photos[Number(card.dataset.index)];
      modalImage.src = photo.src;
      modalCaption.textContent = photo.caption;
      modal.classList.add('show');
      modal.setAttribute('aria-hidden', 'false');
    });
  });
}

function closePhotoModal() {
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
}

function createHeart() {
  const heart = document.createElement('span');
  heart.className = 'heart-particle';
  heart.textContent = Math.random() > 0.5 ? '❤' : '✦';
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${14 + Math.random() * 22}px`;
  heart.style.animationDuration = `${7 + Math.random() * 7}s`;
  heart.style.opacity = `${0.45 + Math.random() * 0.45}`;
  heartsLayer.appendChild(heart);
  setTimeout(() => heart.remove(), 14000);
}

function burstHearts(count = 18) {
  for (let i = 0; i < count; i++) {
    setTimeout(createHeart, i * 70);
  }
}

function setupRevealAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.16 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

let supportIndex = 0;
supportBtn.addEventListener('click', () => {
  supportText.textContent = supportMessages[supportIndex];
  supportIndex = (supportIndex + 1) % supportMessages.length;
  burstHearts(14);
});

envelopeBtn.addEventListener('click', () => {
  envelopeBtn.classList.toggle('open');
  secretMessage.classList.toggle('show');
  burstHearts(20);
});

closeModal.addEventListener('click', closePhotoModal);
modal.addEventListener('click', (event) => {
  if (event.target === modal) closePhotoModal();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closePhotoModal();
});

document.getElementById('openCardBtn').addEventListener('click', () => {
  document.getElementById('letter').scrollIntoView({ behavior: 'smooth' });
  burstHearts(24);
});

renderGallery();
setupRevealAnimation();
typeWriter(letterText, typedTarget);
setInterval(createHeart, 780);
