// Lightbox functionality for graphic design items
function openLightbox(element) {
  const lightbox = document.getElementById('lightbox');
  const lightboxBody = document.getElementById('lightbox-body');
  const lightboxCaption = document.getElementById('lightbox-caption');

  const img = element.querySelector('img');
  const title = element.querySelector('h4') ? element.querySelector('h4').textContent : '';
  const desc = element.querySelector('p') ? element.querySelector('p').textContent : '';

  if (img) {
    lightboxBody.innerHTML = `<img src="${img.src}" alt="${title}">`;
  } else {
    // If it's a placeholder
    const label = element.querySelector('.visual-label') ? element.querySelector('.visual-label').textContent : 'Image Preview';
    lightboxBody.innerHTML = `
      <div style="background:#222; padding:60px 40px; border-radius:12px; color:#fff; border: 1px dashed #555;">
        <h3>${label}</h3>
        <p style="color:#aaa; margin-top:8px;">สามารถใส่รูปภาพจริงลงในแท็ก &lt;img&gt; ได้เลย</p>
      </div>`;
  }

  lightboxCaption.innerHTML = `<strong>${title}</strong> — ${desc}`;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox(event) {
  // Close only if clicking the backdrop or the close button
  if (event.target.id === 'lightbox' || event.target.classList.contains('lightbox-close')) {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const lightbox = document.getElementById('lightbox');
    if (lightbox.classList.contains('active')) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  }
});
