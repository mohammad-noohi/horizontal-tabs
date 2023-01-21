// todo : caption = replace method is for remove # character from id string

const menu = document.getElementsByClassName("menu-link");
const allTabs = document.getElementsByClassName("tab-content");

for (let menu_item of menu) {
  menu_item.addEventListener("click", (e) => {
    let idTarget = e.target.getAttribute("href").replace("#", "");
    let tabTarget = document.querySelector(`#${idTarget}`);

    // set active style and remove from another items
    for (let notActive of menu) {
      notActive.classList.remove("menu-link--active");
    }
    menu_item.classList.add("menu-link--active");

    // visible target and hidden rest of them
    for (let tab of allTabs) {
      tab.style.display = "none";
      if (tab.id == idTarget) {
        tab.style.display = "block";
      }
    }
  });
}
