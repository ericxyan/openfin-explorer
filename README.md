# OpenFin Explorer

### Getting started:

`yarn install`

run `yarn start` and `yarn dev`

### Window Launcher

[Windows Launcher](https://dl.openfin.co/services/download?fileName=OpenFinExplorer&config=http://cdn.openfin.co/demos/openfin-explorer/app.json)

### Launch On Mac

```bash
npm install --global openfin-cli
openfin --launch --config http://cdn.openfin.co/demos/openfin-explorer/app.json
```

### Populate the Docs

#### content.json

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


### What you get:

#### [Visual Studio code](https://code.visualstudio.com/) integration, thanks to @jcarter

* Attach to debugger
* app.json completion
* fin API completion

#### Basic HTML/Javascript Template

* HTML 5 and ES6 Template with OpenFin integration

#### Development server

* [live-server](https://www.npmjs.com/package/live-server)

#### Bootstrap 4

https://v4-alpha.getbootstrap.com/

#### React Router Docs

https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf

#### Material Font Icons

https://material.io/icons/
