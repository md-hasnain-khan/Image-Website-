
function shareImage() {
  const imgUrl = currentImageUrl || window.location.href; 

  if (navigator.share) {
    navigator.share({
      title: "Check out this image!",
      text: "Look at this image I found.",
      url: imgUrl
    })
    .then(() => console.log("Shared successfully"))
    .catch((error) => console.error("Error sharing:", error));
  } else {
    alert("Sharing not supported in this browser.");
  }
  
}

