function showMenu(e) {
  e.preventDefault();
  var x = document.querySelector(".nav__wrapper");
  if (x.className === "nav__wrapper") {
    x.className += " nav__responsive";
    console.log("ok");
    document.querySelector(".nav__mobile").textContent = "X";
  } else {
    x.className = "nav__wrapper";
    console.log("ok2");
    document.querySelector(".nav__mobile").innerHTML = "&#9776;";
  }
}

document.querySelector(".nav__mobile").addEventListener("click", showMenu);
