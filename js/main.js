window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    const minLoadingTime = 1000; // 1 second minimum display time
    const elapsedTime = Date.now() - preloaderStartTime;
    const remainingTime = Math.max(0, minLoadingTime - elapsedTime);

    setTimeout(() => {
      preloader.classList.add('fade-out');
      setTimeout(() => {
        preloader.remove();
      }, 600);
    }, remainingTime);
  }
});
