// select elements
const image = document.querySelector(".img1");
const text = document.querySelector(".text_byimage");

// define animation
const animation = () => {
  // add animation to image
  image.style.animation = "fadein 3s ease-in-out forwards";

  // add animation to text
  const letters = text.querySelectorAll("div");
  letters.forEach((letter, index) => {
    letter.style.animation = `fadein 3s ease-in-out forwards ${index + 1}s`;
  });
};

// execute animation on page load
window.onload = animation;
