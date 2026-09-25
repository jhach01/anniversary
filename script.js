// ========== ELEMENTS ==========
const openBtn = document.getElementById('openBtn');
const landing = document.getElementById('landing');
const messageView = document.getElementById('messageView');
const heartsContainer = document.getElementById('heartsContainer');
const bgMusic = document.getElementById('bgMusic');

// ========== BUTTON CLICK ==========
openBtn.addEventListener('click', () => {
  // Hide landing forever
  landing.classList.remove('active');
  landing.style.display = 'none';

  // Show message and keep it forever
  messageView.classList.add('active');
  messageView.style.opacity = '1';
  messageView.style.visibility = 'visible';
  messageView.style.display = 'flex';

  // Play music
  playMusic();

  // Start hearts
  startHearts();
  burstHearts();
});

// ========== MUSIC ==========
function playMusic() {
  bgMusic.volume = 0.55;
  bgMusic.play().catch(() => {
    console.log('Music will start when browser allows it');
  });
}

// ========== FLOATING HEARTS ==========
const heartEmojis = ['❤️', '💕', '💗', '💖', '💘', '💓', '💞', '♥️'];

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.bottom = '-40px';

  const size = 16 + Math.random() * 22;
  heart.style.fontSize = size + 'px';

  const duration = 4 + Math.random() * 5;
  heart.style.animationDuration = duration + 's';

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

function startHearts() {
  // Keep creating hearts forever
  setInterval(createHeart, 380);
}

function burstHearts() {
  for (let i = 0; i < 12; i++) {
    setTimeout(createHeart, i * 90);
  }
}
