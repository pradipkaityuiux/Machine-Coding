# Frontend Machine Coding Questions and Solutions with React

Welcome to the repository for frontend machine coding questions and solutions using React. This repository contains a collection of challenging and creative frontend projects aimed at sharpening your React skills and understanding of modern frontend development.

## Projects

1. **Star Rating Component**
   - A reusable star rating component where users can rate items by clicking on stars. Includes hover effects and displays the selected rating. Change the Star color, size according to your need.

2. **Design Popover**
   - A popover component that displays additional information when a user clicks on or hovers over an element. This component is versatile and can be used for tooltips, dropdowns, and more.

3. **Accordion Design**
   - An accordion component that allows users to expand and collapse sections of content. Ideal for FAQs, collapsible menus, and other interactive content sections. It is a dynamic component, just increase or decrease the number of objects inside the array and check the functionality.

4. **Image Carousel**
   - A responsive image carousel component that allows users to scroll through a series of images. Includes navigation controls and can be extended to support various image sources and formats. Just add more functionality according to your need.

5. **Search Auto Complete**
   - A search input component with auto-complete functionality. As users type, a list of suggestions is displayed, which can be selected to fill the input.
   - There is a database/db.json file. To run the mock database, just run the command:
   ```bash
   cd 06_Search_autocomplete
   npm install -g json-server@0.17.4
   json-server --watch database/db.json --port 8000
 
6. **VSCode Left Panel Design**
   - A recreation of the Visual Studio Code left panel File Explorer Tab. A tree like component is build by the help of a static json data. This will come from an external API. It is completely dynamic, don't know how many file or folder are there inside a folder.
   - Just like VS Code, while clicking on a folder name, its children will shows below it. And at the same time, it is expandable and collapsable.
   ![VS Code Left panel File Explorer view](/07_VsCode_Leftpanel_Design/src/assets/image.png)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v12 or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/pradipkaityuiux/Machine-Coding.git
   cd frontend-machine-coding
