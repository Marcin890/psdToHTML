function showMenu(e) {
  e.preventDefault();
  const x = document.querySelector(".nav");

  if (x.className === "nav") {
    x.className += " nav__responsive";
    console.log("ok");
    document.querySelector(".nav__mobile").textContent = "X";
  } else {
    x.className = "nav";
    console.log("ok2");
    document.querySelector(".nav__mobile").innerHTML = "&#9776;";
  }
}

document.querySelector(".nav__mobile").addEventListener("click", showMenu);

const listItems = document.querySelectorAll(".nav__item");
listItems.forEach((item) => {
  item.addEventListener("click", closeMenu);
});

function closeMenu(e) {
  e.preventDefault();
  const x = document.querySelector(".nav");
  x.className = "nav";
  document.querySelector(".nav__mobile").innerHTML = "&#9776;";
}
