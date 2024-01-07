# EaseUI

EaseUI is a JavaScript library for creating a simple and customizable navigation bar dynamically in your web projects.

## Features

- Easy integration: Just include a div with an ID and our CSS and JS files.
- Dynamic: Create a navigation bar with customizable logo, menu items, and styling properties.
- Lightweight: Designed to be minimal and easy to use.

## Usage

1. Include the following HTML in your project:

   ```html
   <div id="ease-navbar-root"></div>
call this fucntion 
```js
easeNavbar_v1(
  [
    { name: "Home", href: "#" },
    { name: "Contact", href: "#" },
    { name: "About Us", href: "#" },
  ],
  { logo_url: "path/to/logo.png", bg: "#333", size: "1rem", color: "white" }
);

