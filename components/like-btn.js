function toggleLike(button) {
  let liked = button.getAttribute('data-liked') === 'true';
  const isModalLikeBtn = button.id === 'modalLikeBtn';
  
  let countSpan;
  if (isModalLikeBtn) {
    // Modal like count span
    countSpan = document.getElementById('modalLikeCount');
  } else {
    // Gallery ke like button ke andar like-count span
    countSpan = button.querySelector('.like-count');
  }

  let count = parseInt(countSpan.textContent);
  if (liked) {
    count--;
    button.setAttribute('data-liked', 'false');
    button.classList.remove('liked');  // Optional styling
  } else {
    count++;
    button.setAttribute('data-liked', 'true');
    button.classList.add('liked');  // Optional styling
  }

  countSpan.textContent = count;
}

// Modal open hone par
document.body.style.overflow = "hidden";

// Modal close hone par
document.body.style.overflow = "auto"; // ya "scroll"

