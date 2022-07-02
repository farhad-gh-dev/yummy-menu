# Yummy Menu

A fast-food application with Next JS.

![Yummy menu screenshot](https://raw.githubusercontent.com/farhad-gh-dev/yummy-menu/main/public/design-utils/screenshot.png)

## Pages

- Log In - Sign In
- Menu
- Basket
- Profile

## Tech stack

Next JS (Typescript) - React Hooks - Axios - Sass

## Development and Build

In case of any use of this project, contribution to my [github account](https://github.com/farhad-gh-dev) is needed. To use this template clone this repository or download it, then run **npm install** to install project packages.

    git clone https://github.com/farhad-gh-dev/yummy-menu.git
    npm install

\-
Now in the project directory, you can run the app in the development mode.
Open [http://localhost:3000](http://localhost:3000/) to view it in the browser.

      npm run dev

\-
You can also build the app for production mode, It correctly bundles React in production mode and optimizes the build for the best performance.

      npm run build

Now you can deploy this project! Vercel is a good option :)

## Project Structure

    .
    ├── components
    ├── design
    ├── hooks
    ├── pages
    ├── public
    ├── styles
    ├── utils
    ├── .gitignore
    ├── package.json
    ├── package-lock.json
    └── README.md

- Each component in components folder contains related style file (scss) and subcomponents if there are any
- Design folder includes adobe xd files, icons and images used in the project
- Hooks folder contains hooks used in pages directory (to handle business logic)
- Public folder contains images and icons
- Style Folder contains all global styles, style resets, style variables, mixins and breakpoints + each page's style file
- Utils folder contains helper functions
