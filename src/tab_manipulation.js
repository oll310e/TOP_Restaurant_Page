export default function tabSetup() {
  const container = document.querySelector("#container");

  const tabTargets = document.querySelectorAll("[data-tab-target]");

  const buttons = document.querySelectorAll(".btn");

  console.log(tabTargets, buttons);

  function displayTab(newTab) {
    tabTargets.forEach((tab) => {
      tab.classList.remove("active");
    });
    newTab.classList.add("active");
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let newTabName = btn.getAttribute("data-tab-content");
      let newTab = document.querySelector(`[data-tab-target="${newTabName}"`);
      displayTab(newTab);
    });
  });
}
