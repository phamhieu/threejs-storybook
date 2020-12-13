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
