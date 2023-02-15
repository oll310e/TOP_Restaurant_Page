export default function loadPage() {
  const container = document.getElementById("container");
  console.log(container);

  const image = document.createElement("img");
  image.id = "ocean_image";
  image.setAttribute("src", "../references/ocean.jpeg");
  image.setAttribute("alt", "ocean view image");

  const headline = document.createElement("h1");
  headline.id = "headline";
  headline.innerText = "SeaSalt MoonBar";

  const brag = document.createElement("p");
  brag.id = "brag";
  brag.innerText =
    "We are the best bar under the moon, and with the ocean at our feet, there is no better place to relax and enjoy a good drink";

  container.appendChild(image);
  container.appendChild(headline);
  container.appendChild(brag);
}
