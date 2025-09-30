const folder = document.querySelector(".folder");

folder.addEventListener("mouseover", () => {
  gsap.to(".image-0", {
    y: "-48%",
    ease: "easeOut",
  });

  gsap.to(".image-1", {
    y: "-40%",
    ease: "easeOut",
  });
  gsap.to(".image-2", {
    y: "-42%",
    ease: "easeOut",
  });
});

folder.addEventListener("mouseout", () => {
  gsap.to(".image-0", {
    y: "-10%",
    ease: "easeInOut",
  });

  gsap.to(".image-1", {
    y: "-10%",
    ease: "easeInOut",
  });
  gsap.to(".image-2", {
    y: "-10%",
    ease: "easeInOut",
  });
});
