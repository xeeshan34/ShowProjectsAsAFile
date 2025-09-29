const folder = document.querySelector(".folder");

folder.addEventListener("mouseover", () => {
  const image0 = document.querySelector(".image-0");
  const image1 = document.querySelector(".image-1");
  const image2 = document.querySelector(".image-2");

  const randomNum = Math.floor(Math.random() * 5 + 1);
  console.log(randomNum);

  image0 = style.top = "0%";
  image1 = style.top = "0%";
  image2 = style.top = "-19%";
});
