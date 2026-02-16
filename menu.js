async function loadMenu() {
  const response = await fetch('menu.json');
  const menuItems = await response.json();

  const menuContainer = document.getElementById("menu");
  const currentPage = window.location.pathname.split("/").pop();

  menuItems.forEach(item => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = item.url;
    a.textContent = item.title;

    if (item.url === currentPage) {
      a.classList.add("active-link");
    }

    li.appendChild(a);
    menuContainer.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", loadMenu);
