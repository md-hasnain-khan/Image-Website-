
// Variables to track current image
let currentImageUrl = "";
let currentLikeCount = 0;

function openModal(imgSrc, description, likeCount = 0) {
  const modal = document.getElementById('downloadModal');
  const modalImg = document.getElementById('modalImage');
  const modalDesc = document.getElementById('modalDesc');
  const modalDownloadLink = document.getElementById('modalDownloadLink');
  const modalLikeBtn = document.getElementById('modalLikeBtn');
  const modalLikeCount = document.getElementById('modalLikeCount');
  const moreLikeContainer = document.getElementById('moreLikeContainer');

  currentImageUrl = imgSrc;
  currentLikeCount = likeCount;

  // Update modal content
  modalImg.src = imgSrc;
  modalDesc.textContent = description || "No description available";
  modalDownloadLink.href = imgSrc;
  modalLikeCount.textContent = likeCount;
  modalLikeBtn.setAttribute('data-liked', 'false');

  // Clear existing "More Like This"
  moreLikeContainer.innerHTML = "";

  // Populate "More Like This" except current image
  allImages.forEach(img => {
    if (img.url !== imgSrc) {
      const thumb = document.createElement('img');
      thumb.src = img.url;
      thumb.alt = img.description;
      thumb.title = img.description;
      thumb.style.cursor = 'pointer';
      thumb.style.width = '80px';
      thumb.style.height = '80px';
      thumb.style.objectFit = 'cover';
      thumb.style.borderRadius = '6px';
      thumb.style.boxShadow = '0 0 5px rgba(0,0,0,0.2)';

      thumb.onclick = () => {
        openModal(img.url, img.description, 0);  // Open modal with new image
      };

      moreLikeContainer.appendChild(thumb);
    }
  });

  modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

}

function closeModal() {
  const modal = document.getElementById('downloadModal');
  modal.style.display = 'none';

  // Enable body scroll jab modal band ho
  document.body.style.overflow = 'auto';  // ya 'scroll'
}

// Agar user modal ke bahar click kare toh modal band ho jaye aur scroll wapas aaye
window.onclick = function(event) {
  const modal = document.getElementById('downloadModal');
  if (event.target === modal) {
    closeModal();
  }
}