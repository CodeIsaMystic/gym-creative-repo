#This is the starting project for Web Unlocked tutorials

This project is bootstrapped by gatsby

To run this started use
`npm i` - to install dependencies
`npm start` - to start local dev server

<div align="center">
<h1>Gym Creative Landing Page Repo</h1>

<a href="">
  <img
    height=""
    width=""
    alt=""
    src=""
  />
</a>

<p>A simple creative website using React, Gatsby, GSAP & Locomotive Scroll</p>

<br />

<!-- [**Read The Docs**](https://testing-library.com/react) |
[Edit the docs](https://github.com/testing-library/testing-library-docs)
<br /> -->

</div>

## Getting Started

The face-model is a frontend for the [face-model-api](https://github.com/harshcut/face-model-api), built with React, state management with Redux and TailwindCSS. Get response from Clarifai API and see it visualize. More on Clarifai's `face-detection` model can be found [here](https://www.clarifai.com/models/face-detection).

[See Live](https://face-model.vercel.app/)

## Files Architecture

```
GYM CREATIVE WEBSITE
├── public
│   ├── page-data
│   └── static
│       └── favicon.ico
├── src
│   ├── assets
│       └── img/
│   ├── components
│   ├── containers
│   ├── CustomCursor
│   ├── hooks
│   ├── pages
│   ├── styles
│   ├── utils
│   └── data.js
├── static
│   └── favicon.ico
├── .gitignore
├── .prettierignore
├── .prettierrc
├── gatsby.browser.js
├── gatsby.confing.js
├── LICENSE
├── package.json
├── package-lock.json
├── README.md
└── yarn-lock.json
```

## Dependencies

### React

Redux is used for managing user state inside the application. React-Redux state is hydrated on every reload and is subscribed to `localStorage` as `state` on every change.

### Gatsby

React Hook Form is used for managing form data inside the application.

### SASS

Styled JSX is for full CSS support for JSX. The type definition can be found in [typings](https://github.com/harshcut/face-model/blob/main/typings/styled-jsx.d.ts).

### GSAP & Locomotive Scroll

Tailwind is used for predefined `classNames`. Installation guide for React can be found [here](https://tailwindcss.com/docs/guides/create-react-app#setting-up-tailwind-css).

## Developing

Fork the repository using [this](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo) guide, then clone it locally.

```shell
git clone https://github.com/harshcut/face-model
cd face-model
yarn install
```

You can now run the frontend on your `localhost`.

```shell
yarn start
```

## Privacy

All data that is collected through the web app is stored securely and will not be distributed to third parties. The data is collected to improve current features or services in the app.

## License

```text
MIT License

Copyright (c) 2021 Harsh Karande

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
