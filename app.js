const images = [
  { src: "assets/crosstour-front.jpg", alt: "Red Corvette-inspired CrossTour concept SUV, front three-quarter view" },
  { src: "assets/crosstour-rear.jpg", alt: "CrossTour concept SUV, rear three-quarter view" },
  { src: "assets/crosstour-interior.jpg", alt: "CrossTour concept premium black interior and dashboard" },
  { src: "assets/crosstour-cargo.jpg", alt: "CrossTour concept cargo space with luggage and a golden retriever" },
];

const dialog = document.querySelector(".lightbox");
const dialogImage = dialog.querySelector("img");
const dialogCount = dialog.querySelector("p");
let activeImage = 0;

function showImage(index) {
  activeImage = (index + images.length) % images.length;
  dialogImage.src = images[activeImage].src;
  dialogImage.alt = images[activeImage].alt;
  dialogCount.textContent = `${activeImage + 1} / ${images.length}`;
}

document.querySelectorAll("[data-gallery-image]").forEach((button) => {
  button.addEventListener("click", () => {
    showImage(Number(button.dataset.galleryImage));
    dialog.showModal();
  });
});

dialog.querySelector(".lightbox-close").addEventListener("click", () => dialog.close());
dialog.querySelector(".lightbox-prev").addEventListener("click", () => showImage(activeImage - 1));
dialog.querySelector(".lightbox-next").addEventListener("click", () => showImage(activeImage + 1));
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

const saveButton = document.querySelector(".save-button");
saveButton.addEventListener("click", () => {
  const isSaved = saveButton.getAttribute("aria-pressed") === "true";
  saveButton.setAttribute("aria-pressed", String(!isSaved));
  saveButton.querySelector("span").textContent = isSaved ? "Save" : "Saved";
});
