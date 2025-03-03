// src/addon-registry/create-addons-styles-loader.ts
import fs from "fs";
import path from "path";
function buildLoaderCode(addonsStylesInfo = []) {
  let buf = `/*
Don't change this file manually.
It is autogenerated by @plone/registry.
Add a ./styles/main.css in your add-on to load your add-on styles in the app.
*/

`;
  addonsStylesInfo.forEach((addon) => {
    const customization = `${addon}/styles/main.css`;
    const line = `@import '${customization}';
`;
    buf += line;
  });
  return buf;
}
function createAddonsStyleLoader(addonsStylesInfo) {
  const addonsLoaderPath = path.join(process.cwd(), "addons.styles.css");
  fs.writeFileSync(addonsLoaderPath, buildLoaderCode(addonsStylesInfo));
}
export {
  buildLoaderCode,
  createAddonsStyleLoader
};
