# OpenFin Explorer

The OpenFin Explorer is an OpenFin Application designed to acquaint users with the OpenFin API feature set.

### Check it Out

#### Windows

The current version is hosted on our CDN.

[Windows Launcher](https://install.openfin.co/download?fileName=OpenFinExplorer&config=http%3A%2F%2Fcdn.openfin.co%2Fdemos%2Fopenfin-explorer%2Fapp.json)

#### Launch With the OpenFin CLI

The OpenFIn CLI is available on [NPM](https://www.npmjs.com/package/openfin-cli).

```bash
npm install --global openfin-cli
openfin --launch --config http://cdn.openfin.co/demos/openfin-explorer/app.json
```

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
