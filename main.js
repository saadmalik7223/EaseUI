function easeNavbar_v1(menuItems, propertie) {
  // root element of navbar
  var navbarRoot = document.getElementById("ease-navbar-root");
  // if width present then set that otherwise default set width same for heigth
  navbarRoot.style = `width: ${
    propertie.width ? propertie.width : "100vw"
  };height: ${propertie.height ? propertie.height : "100px"};`;

  // Create the nav element
  var navElement = document.createElement("nav");
  navElement.style = `background-color: ${
    propertie.bg ? propertie.bg : "black"
  }`;
  // Create the logo div
  var logoDiv = document.createElement("div");
  logoDiv.className = "logo";
  logoDiv.style = `  background-image: url(${
    propertie.logo_url ? propertie.logo_url : ""
  });`;
  navElement.appendChild(logoDiv);

  // Create the ul element
  var ulElement = document.createElement("ul");

  // Iterate through menu items and create li elements
  menuItems.forEach(function (menuItem) {
    console.log(menuItem.href);
    var liElement = document.createElement("li");
    var aElement = document.createElement("a");
    aElement.href = `${menuItem.href ? menuItem.href : "#"}`; // Set your link here
    aElement.innerHTML = menuItem.name || menuItem;

    aElement.style = `font-size:${
      propertie.size ? propertie.size : "1rem"
    };color:${propertie.color ? propertie.color : "white"}`;

    liElement.appendChild(aElement);
    ulElement.appendChild(liElement);
  });

  // Append ul to nav
  navElement.appendChild(ulElement);

  // Append the entire nav to the specified div with ID "ease-navbar-root"
  navbarRoot.appendChild(navElement);
}
easeNavbar_v1(
  [
    { name: "saad", href: "ss" },
    "malik",
    { name: "anwar", href: "saadanwar.com" },
  ],
  { logo_url: "", bg: "grey" }
);
