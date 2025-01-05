document.addEventListener("mousemove", (e) => {
  const eyes = document.querySelectorAll(".eye");
  eyes.forEach((eye) => {
    const rect = eye.getBoundingClientRect();
    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;

    const angle = Math.atan2(e.pageX - eyeCenterX, e.pageY - eyeCenterY);
    const x = Math.sin(angle) * 20; // Adjust range for pupil movement
    const y = Math.cos(angle) * 20;

    const pupil = eye.querySelector(".pupil");
    pupil.style.transform = `translate(${x}px, ${-y}px)`;
  });
});
