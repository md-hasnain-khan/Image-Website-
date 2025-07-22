function openModal(imgSrc, description, likeCount = 0) {
  const modal = document.getElementById('downloadModal');
  const modalImg = document.getElementById('modalImage');
  const modalDesc = document.getElementById('modalDesc');
  const modalDownloadLink = document.getElementById('modalDownloadLink');
  const modalLikeBtn = document.getElementById('modalLikeBtn');
  const modalLikeCount = document.getElementById('modalLikeCount');

  modalImg.src = imgSrc;
  modalDesc.textContent = description || "No description available";
  modalDownloadLink.href = imgSrc;
  modalLikeCount.textContent = likeCount;
  modalLikeBtn.setAttribute('data-liked', 'false'); 
  modal.style.display = 'flex';
}
function closeModal() {
  const modal = document.getElementById('downloadModal');
  modal.style.display = 'none';
}

window.onclick = function(event) {
  const modal = document.getElementById('downloadModal');
  if(event.target === modal) {
    closeModal();
  }
}

function toggleLike(button) {
  let liked = button.getAttribute('data-liked') === 'true';
  let likeCountSpan;

  if(button.id === 'modalLikeBtn'){
    likeCountSpan = document.getElementById('modalLikeCount');
  } else {
    likeCountSpan = button.querySelector('.like-count');
  }

  let count = parseInt(likeCountSpan.textContent);
  if(liked){
    count--;
    button.setAttribute('data-liked', 'false');
  } else {
    count++;
    button.setAttribute('data-liked', 'true');
  }
  likeCountSpan.textContent = count;
}
