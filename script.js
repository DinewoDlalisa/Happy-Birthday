document.getElementById("startButton").addEventListener("click", function() {
    document.querySelector('.landing').classList.add('hidden');
    const birthdayMessage = document.getElementById('birthdayMessage');
    birthdayMessage.classList.remove('hidden');
  
    setTimeout(() => {
      const gallery = document.querySelector('.gallery');
      gallery.classList.remove('hidden');
      startSlideshow(); // Start the slideshow when the gallery is visible
    }, 500);
  
    setTimeout(() => {
      const itachiQuote = document.getElementById('itachiQuote');
      itachiQuote.classList.remove('hidden');
    }, 1000);
  });
  
  let currentIndex = 0;
  const photos = document.querySelectorAll('.photos img');
  const totalPhotos = photos.length;
  
  function startSlideshow() {
    photos[currentIndex].classList.add('active'); // Show the first photo
  
    setInterval(() => {
      photos[currentIndex].classList.remove('active'); // Hide the current photo
      currentIndex = (currentIndex + 1) % totalPhotos; // Move to the next photo
      photos[currentIndex].classList.add('active'); // Show the next photo
    }, 3000); // Change photo every 3 seconds
  }
  
  
  