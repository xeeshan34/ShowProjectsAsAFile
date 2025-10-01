// const folders = document.querySelectorAll(".folder");

// const folder = document.querySelectorAll(".folder");

// folder.forEach((element, index) => {
//   element.addEventListener("mouseover", () => {
//     console.log(`Hovered element index: ${index}`);
//     // You can also do your GSAP animation here
//   });
// });

// folders.forEach((folder) => {
//   const folderBottom = folder.querySelector(".folder-bottom");
//   folderBottom.addEventListener("mouseover", () => {
//     const image0 = folder.querySelector(".image-0");
//     const image1 = folder.querySelector(".image-1");
//     const image2 = folder.querySelector(".image-2");

//     gsap.to(image0, {
//       y: "-120%",
//       ease: "power4.out",
//       duration: 0.5,
//       rotate: "-10deg",
//     });

//     gsap.to(image1, {
//       y: "-110%",
//       ease: "power4.out",
//       duration: 0.5,
//       rotate: "10deg",
//     });
//     gsap.to(image2, {
//       y: "-120%",
//       ease: "power4.out",
//       duration: 0.5,
//       rotate: "0deg",
//     });
//   });

//   folder.addEventListener("mouseout", () => {
//     gsap.to(".image-0", {
//       y: "10%",
//       ease: "easeInOut",
//       rotate: "0deg",
//     });

//     gsap.to(".image-1", {
//       y: "10%",
//       ease: "easeInOut",
//       rotate: "0deg",
//     });
//     gsap.to(".image-2", {
//       y: "10%",
//       ease: "easeInOut",
//       rotate: "0deg",
//     });
//   });
// });

const folders = document.querySelectorAll(".folder");

folders.forEach((folder) => {
  const folderBottom = folder.querySelector(".folder-bottom");
  const image0 = folder.querySelector(".image-0");
  const image1 = folder.querySelector(".image-1");
  const image2 = folder.querySelector(".image-2");

  folderBottom.addEventListener("mouseover", () => {
    image0.style.display = "flex";
    image1.style.display = "flex";
    image2.style.display = "flex";

    gsap.to(image0, {
      y: "-120%",
      ease: "power4.out",
      duration: 0.9,
      rotate: "-10deg",
    });

    gsap.to(image1, {
      y: "-110%",
      ease: "power4.out",
      duration: 0.9,
      rotate: "10deg",
    });

    gsap.to(image2, {
      y: "-120%",
      ease: "power4.out",
      duration: 0.9,
      rotate: "0deg",
    });
  });

  folder.addEventListener("mouseout", () => {
    gsap.to([image0, image1, image2], {
      y: "10%",
      ease: "power4.inOut",
      rotate: "0deg",
      duration: 0.4,
      onComplete: () => {
        image0.style.display = "none";
        image1.style.display = "none";
        image2.style.display = "none";
      },
    });
  });
});
