# Hackis

Hackis is a lightweight, simple but clean CSS utility and component framework designed to help you create responsive pages **fast**. Inspired by frameworks like Tailwind and Bootstrap, Hackis focuses on speed, simple HTML structure, programming aesthetics, and developer productivity. This framework is a game changer for documentation page creation and rapid prototyping.

## Features

-  **Rapid Development:** Utility-first classes and ready-to-use components for instant layouts and styling.
-  **Clean Documentaion/Programming Aesthetic:** Clean, "programmy" styles perfect for technical docs, prototypes, and dev-focused sites.
-  **Responsive Utilities:** Easy-to-use responsive classes (`sm:`, `md:`, `lg:`, etc.) for mobile-friendly designs.
-  **Customizable Components:** Buttons, containers, cards, and more—ready to drop into your project.
-  **Simple Setup:** No complex build steps required—just include the CSS and start building.

## Getting Started With The Demo (NOT YET PUBLIC)

1. **Install Hackis:**

   ```sh
   npm install hackis
   ```

2. **Include Hackis in your CSS:**

   ```css
   @import "./css/base.css";
   @import "./css/components.css";
   @import "./css/util.css";
   @import "./css/util-responsive.css";
   ```

3. **Include hackis.js in your HTML:**

   ```html
   <head>
      <!-- Existing HTML Header code above -->
      <link src="./js/hackis.js" />
   </head>
   ```

4. **Start building!**
   ```html
   <div class="container">
      <button class="button-primary w-full md:w-1-2">Click Me</button>
   </div>
   ```

## Example

```html
<div class="container">
   <h1 class="text-center">Welcome to Hackis</h1>
   <button class="button-primary bg-light-green">Primary</button>
   <button class="button-secondary bg-dark-gray">Secondary</button>
</div>
```

## Why Hackis?

-  **Game-changing for documentation:** Build beautiful, readable docs in minutes.
-  **Perfect for devs:** Minimalist, code-inspired look and feel.
-  **No bloat:** Only the utilities and components you need.

---

_Hackis: Build fast. Build hacky. Build docs like never before!_
