const folders = document.querySelectorAll(".folder");

const folder = document.querySelectorAll(".folder");

folder.forEach((element, index) => {
  element.addEventListener("mouseover", () => {
    console.log(`Hovered element index: ${index}`);
    // You can also do your GSAP animation here
  });
});

folders.forEach((folder) => {
  const folderBottom = folder.querySelector(".folder-bottom");
  folderBottom.addEventListener("mouseover", () => {
    const image0 = folder.querySelector(".image-0");
    const image1 = folder.querySelector(".image-1");
    const image2 = folder.querySelector(".image-2");

    gsap.to(image0, {
      y: "-120%",
      ease: "power4.out",
      duration: 0.5,
      rotate: "-10deg",
    });

    gsap.to(image1, {
      y: "-110%",
      ease: "power4.out",
      duration: 0.5,
      rotate: "10deg",
    });
    gsap.to(image2, {
      y: "-120%",
      ease: "power4.out",
      duration: 0.5,
      rotate: "0deg",
    });
  });

  folder.addEventListener("mouseout", () => {
    gsap.to(".image-0", {
      y: "10%",
      ease: "easeInOut",
      rotate: "0deg",
    });

    gsap.to(".image-1", {
      y: "10%",
      ease: "easeInOut",
      rotate: "0deg",
    });
    gsap.to(".image-2", {
      y: "10%",
      ease: "easeInOut",
      rotate: "0deg",
    });
  });
});
