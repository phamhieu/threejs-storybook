This is a Nextjs v10 + Storyboard v6 + scss + Typescript template

## Setup Guide

- Create next-js project

```bash
npx create-next-app
```

- Install scss package

```bash
npm i --save sass
```

- Rename `styles/globals.css` to `globals.scss`
- Install typescript packages

```bash
npm install --save-dev typescript @types/react @types/node
```

- Rename `index.js` to `index.tsx`
- Run project to create `tsconfig.json` and `next-env.d.ts`

```bash
npm run dev
```

- Install storybook

```bash
npx sb init
```

- Install storybook scss packages

```bash
npm i --save-dev @storybook/preset-scss babel-loader css-loader file-loader sass-loader style-loader
```

- update `.storybook/main.js`

```js
const path = require("path");

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // Handle SCSS modules
    {
      name: "@storybook/preset-scss",
      options: {
        cssLoaderOptions: {
          modules: true,
        },
        sassLoaderOptions: {
          sassOptions: {
            includePaths: [
              path.resolve(__dirname, "../styles"),
              path.resolve(__dirname, "../node_modules"),
            ],
          },
        },
      },
    },
  ],
};
```

- update `.storybook/preview.js`

```js
import "../styles/globals.scss";

import * as nextImage from "next/image";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

// Replace next/image for Storybook
Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: (props) => {
    const { width, height } = props;
    const ratio = (height / width) * 100;
    return (
      <div
        style={{
          paddingBottom: `${ratio}%`,
          position: "relative",
        }}
      >
        <img
          style={{
            objectFit: "cover",
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
          {...props}
        />
      </div>
    );
  },
});
```

- Done! start your new storybook

```bash
npm run storybook
```
