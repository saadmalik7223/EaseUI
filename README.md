# EaseUI

EaseUI is a JavaScript library for creating a simple and customizable Website dynamically in your web projects.
 
# its include

- **Navbar:** A customizable navigation bar for easy navigation.
- **Login Pages:** Secure and user-friendly login pages for authentication.
- **Signup Page:** Registration page for new users to create an account.
- **Dashboard:** A centralized space displaying key information and features.
- **Cards:** Modular components for presenting information or actions.
- **Animation:** Smooth and engaging animations to enhance user experience.
- **Progress Bar:** Visual representation of progress or loading status.
- **SVG:** Scalable Vector Graphics for high-quality and responsive images.

# Usage

To integrate these features into your project, follow the instructions in the respective sections below.

## Navbar

Include the following HTML in your project:
``` html
  <link rel="stylesheet" href="https://unpkg.com/@saadanwar/easeui@1.0.0/style.css"/>
    <script defer src="https://unpkg.com/@saadanwar/easeui@1.0.0/main.js"></script>
```

```html
<div id="ease-navbar-root"></div>
```
to creame navbar call this fucntion ......
```js
easeNavbar_v1(
  [
    { name: "Home", href: "#" },
    { name: "Contact", href: "#" },
    { name: "About Us", href: "#" },
  ],
  { logo_url: "path/to/logo.png", bg: "#333", size: "1rem", color: "white" }
);
```
![Alt text](sample.jpg)

