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

### Deploying

```bash
yarn build
```

The build process will copy the necessary HTML, Javascript, and Application Manifest files to the `dist` folder. Host that directory as a static site and target `app.json` to launch the application.

Currently Hosted on OpenFin S3
`Amazon S3 > cdn.openfin.co > demos > openfin-explorer`

#### Metadata
Set the cache-control max age when uploading
```
Cache-Control max-age=60
```
For app.json, set the content-type to `text\plain` to prevent the `app.json` from being downloaded when accessed via the browser
```
Content-Type text/plain
```

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
https://reacttraining.com/react-router/web/guides/philosophy

#### Material Font Icons

https://material.io/icons/
