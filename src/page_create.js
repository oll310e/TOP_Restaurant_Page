export default function loadPage() {
  const container = document.getElementById("container");

  const tabMenu = document.createElement("div");
  tabMenu.id = "tab_menu";

  const tabBtnOne = document.createElement("button");
  tabBtnOne.setAttribute("data-tab-content", "home");
  tabBtnOne.classList.add("btn");

  tabBtnOne.innerText = "Home";

  const tabBtnTwo = document.createElement("button");
  tabBtnTwo.classList.add("btn");
  tabBtnTwo.setAttribute("data-tab-content", "about");
  tabBtnTwo.innerText = "About";

  tabMenu.appendChild(tabBtnOne);
  tabMenu.appendChild(tabBtnTwo);

  const image = document.createElement("div");
  image.id = "title_img";

  const headline = document.createElement("h1");
  headline.id = "headline";
  headline.innerText = "SeaSalt MoonBar";

  const homeTab = document.createElement("div");
  homeTab.setAttribute("data-tab-target", "home");
  homeTab.classList.add("active");
  homeTab.classList.add("tab");

  const homeTabText = document.createElement("p");
  homeTabText.id = "brag";
  homeTabText.innerText =
    "We are the best bar under the moon, and with the ocean at our feet, there is no better place to relax and enjoy a good drink";
  homeTab.appendChild(homeTabText);

  const aboutTab = document.createElement("div");
  aboutTab.setAttribute("data-tab-target", "about");
  aboutTab.classList.add("tab");

  const aboutTabText = document.createElement("p");
  aboutTabText.id = "brag";
  aboutTabText.innerHTML =
    'We are a happy crew with great enthusiasm and love for the craft and the ocean. \nPress <a href="/">here</a> to find out more';
  aboutTab.appendChild(aboutTabText);

  image.appendChild(headline);

  container.appendChild(tabMenu);
  container.appendChild(image);
  container.appendChild(homeTab);
  container.appendChild(aboutTab);
}
