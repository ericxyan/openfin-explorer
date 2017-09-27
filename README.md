# OpenFin Explorer

The OpenFin Explorer is an OpenFin Application designed to acquaint users with the OpenFin API feature set.

### Check it Out

#### Windows

The current version is hosted on our CDN.

[Windows Launcher](https://dl.openfin.co/services/download?fileName=OpenFinExplorer&config=http://cdn.openfin.co/demos/openfin-explorer/app.json)

#### Launch With the OpenFin CLI

The OpenFIn CLI is available on [NPM](https://www.npmjs.com/package/openfin-cli).

```bash
npm install --global openfin-cli
openfin --launch --config http://cdn.openfin.co/demos/openfin-explorer/app.json
```

### Meetup Links

Register your Community Application [here](https://openfin.co/community-edition/)

In addition to our CLI, check out our open source code [here](https://github.com/hadoukenio/)

See more demos [here](https://openfin.co/tutorial-directory/) as well as [supplemental documenation](https://openfin.co/developers/documentation-2/)

### Development & Contribution

This project is built using [React](https://facebook.github.io/react/) and [TypeScript](https://www.typescriptlang.org/)

```shell
yarn install
yarn build
```

Build is compiled in the `dist` directory.

For live reload development server:

`$ yarn dev`

### Testing

`$ yarn test`

### Linting

`$ yarn lint`
