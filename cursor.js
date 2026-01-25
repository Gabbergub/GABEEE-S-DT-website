
const cursor = document.querySelector(".custom-cursor");

// Move the custom cursor with the mouse
document.addEventListener("mousemove", (e) => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
  cursor.style.opacity = 1;
});

// Hide cursor when the mouse leaves the viewport
document.addEventListener("mouseout", () => {
  cursor.classList.add("hidden");
});

// Show cursor when the mouse re-enters the viewport
document.addEventListener("mouseover", () => {
  cursor.classList.remove("hidden");
});

// Add rotation effect when hovering over links
const linkElements = document.querySelectorAll("a");
linkElements.forEach((element) => {
  element.addEventListener("mouseover", () => {
    cursor.classList.add("cursor-rotate");
  });
  element.addEventListener("mouseout", () => {
    cursor.classList.remove("cursor-rotate");
  });
});
  