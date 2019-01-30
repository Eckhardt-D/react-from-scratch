# React from scratch

This repository is a collection of react projects. They range from simple .html and .js files that are built with parcel, to larger files installed with tools like *create-react-app*.

## Installation

Simply run this in the main directory
`npm install`

## Development/building

To view the basic projects in the browser on a development server, stay in the main directory and run:

`npm run dev -- subdirectory/index.html`

So as an example, for the basic-app, you'll run:

`npm run dev -- basic-app/index.html`

This is just a built in tool that comes with npm to add arguments to a script. I did it this way to avoid having to install the dependencies each time in the subdirectory.

To build your app:

`npm run build -- subdirectory/index.html`

> Not all subfolders are structured this way, some are npm projects on their own and require you to cd into them and use the tools shipped with the project.

## Happy coding