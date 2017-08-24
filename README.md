# OpenFin Explorer

The OpenFin Explorer is an OpenFin Application designed to acquaint users with the OpenFin API feature set.

### Check it Out

#### Windows

An executable launcher for Windows.

[Windows Launcher](https://dl.openfin.co/services/download?fileName=OpenFinExplorer&config=http://cdn.openfin.co/demos/openfin-explorer/app.json)

#### Launch With the OpenFin CLI

The OpenFIn CLI is available on [NPM](https://www.npmjs.com/package/openfin-cli).

```bash
npm install --global openfin-cli
openfin --launch --config http://cdn.openfin.co/demos/openfin-explorer/app.json
```

### Development & Contribution

`yarn install`

To run locally
`$ yarn start`

For live reload development server
`$ yarn dev`

### Testing

`$ yarn test`

### Linting

`$ yarn lint`

### Adding Content

Currently all app content is hosted in the [content.json](openfin-explorer/public/content.json) file. Code snippets are in the [demo.ts](openfin-explorer/public/js/demo.ts) file.

`content.json` is:
- An array of page objects.
- Pages MUST have:
	- path
	- section
- Pages CAN have:
	- header
	- subHeader
	- description
	- sections (array)
		- header
		- subHeader
		- subSections
			- type (code, markdown, text)

### Deploying

This project is built with [React](https://facebook.github.io/react/). To build the project for hosting:

```bash
yarn build
```

The build process will copy the necessary HTML, Javascript, and [Application Manifest](https://openfin.co/application-config/) files to the `dist` folder. Host that directory as a static site and target `app.json` to launch the application.
