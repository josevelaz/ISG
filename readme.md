<h1 style="text-align: center">SVG Component Library Creator</h1>
<h4 style="text-align: center">CLI Powered by <a href="https://github.com/infinitered/gluegun/blob/master/readme.md">Gluegun</a></h4>
<h4 style="text-align: center">SVG transformer powered by <a href="https://github.com/infinitered/gluegun/blob/master/readme.md">SVGR</a></h4>

<div align="center">

  <div style="display: flex; flex-direction: column">
  
  [![npm version](https://badge.fury.io/js/svg-component-library-creator.svg)](https://badge.fury.io/js/svg-component-library-creator)
  [![Typescript Checked](https://camo.githubusercontent.com/21132e0838961fbecb75077042aa9b15bc0bf6f9/68747470733a2f2f62616467656e2e6e65742f62616467652f4275696c74253230576974682f547970655363726970742f626c7565)](https://www.typescriptlang.org/)
  [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
  [![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)
  </div>
<p style="font-size: 20px; font-weight: 500">
  Create a beautiful 💅 and type-safe 🔐 React ⚛️ and React Native📱 Icon library with one single command.
</p>
<p style="font-size: 20px; font-weight: 500">
  Supports Typescript ✅ and Javascript ✅
</p>
<p style="font-size: 20px; font-weight: 500">
  Fully Open Source, and Contributors Welcome 👋
</p>
<img src="https://i.imgur.com/kY3NBi2.png" width="648" style="margin-top: 20px; ">
</div>

<br>

## • Why?

One day I was working on a React Native application, and I had to transfer over about 25 some icons. I was dreading doing this, as I had to go in one by one and copying the necessary SVG code and pasting it... Then I noticed a pattern... I figured out i could completly automate _(partially)_ the creation of a very clean, and easy to understand component.

## • A MUST for React Native developers _(especially beginners)_

I remember a little bit over 6 months ago, I was tasked on increasing the load times of icons. Naturally, coming from a web developer background, i decided to look into using SVGs.
Little did i know I would spend about a week or so trying to get those #&\*&@! SVG files to load. At the end, I ended up creating this horrible system where i had to manually paste the code in individual js files... at the end we ended up having around 30 js files JUST for icons.

This CLI helps newbie developers be able to integrate SVG icons with the press of the button.

## • How to use

1. Locate the parent folder with all the svgs
2. Run `npx svg-component-library-creator create [FOLDER_NAME]` or `npx svg-clc c [FOLDER_NAME]`
   - If no folder name is provided, the CLI will search for `svgs` as a default folder
3. Follow through the promps until the success message is displayed
4. Move or Copy/Paste your brand new Icons.tsx _(Icons.js if using Vanilla JS)_ to your project!

**Added new icons to your library?? Just run the command again and as long as all file names stayed the same there will be 0 naming issues!!**

- ### Commands

| Commands     | Description                                               |         Parameters |
| :----------- | :-------------------------------------------------------- | -----------------: |
| `create, c`  | Converts multiple svg files into a single react component | \* [ FOLDER_NAME ] |
| `help, h`    | Displays all available commands                           |                    |
| `version, v` | Displays current version                                  |                    |

\*_- optional parameter_

<!-- prettier-ignore -->
*Got an issue or have an idea? **[Create an Issue](https://github.com/josevelaz/svg-component-library-creator/issues/new)***
