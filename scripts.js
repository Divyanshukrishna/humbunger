function toggleMenu() {
  var menuItems = document.getElementById("menuItems");
  menuItems.addEventListener("mouseover",()=>{
    let colorChange = document.querySelector("a");
    let valueOfcolor = colorChangeOfIcons();
    colorChange.style.color = valueOfcolor;
  });
  if (menuItems.style.display === "flex") {
    menuItems.style.display = "none";
  } else {
    menuItems.style.display = "flex";
  }
}

let colorChangeOfIcons = () =>{
  let red = Math.floor(Math.random()*255);
  let green = Math.floor(Math.random()*255);
  let blue = Math.floor(Math.random() * 255);
  color = `${red} , ${green} , ${blue}`;
  return color;
}

