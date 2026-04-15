const photos = document.querySelectorAll(".photo");
const centerText = document.getElementById("centerText");

let activePhoto = null;

photos.forEach(photo => {
  photo.addEventListener("click", (e) => {
    e.stopPropagation();

    if (activePhoto === photo) {
      reset();
      return;
    }

    reset();

    photo.classList.add("active");
    activePhoto = photo;

    photos.forEach(p => {
      if (p !== photo) p.classList.add("blur");
    });

    centerText.innerText = photo.querySelector("p").innerText;
  });
});

document.addEventListener("click", reset);

function reset() {
  photos.forEach(p => {
    p.classList.remove("active", "blur");
  });

  centerText.innerText = "Te amo, Kauã! ❤️";
  activePhoto = null;
}