function toggleLike(btn) {
  const countSpan = btn.querySelector('.like-count');
  let count = parseInt(countSpan.textContent);
  let isLiked = btn.dataset.liked === "true";

  if (isLiked) {
    count--;
    btn.classList.remove('liked');
    btn.dataset.liked = "false";
  } else {
    count++;
    btn.classList.add('liked');
    btn.dataset.liked = "true";
  }

  countSpan.textContent = count;
}
