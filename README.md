[![npm](https://img.shields.io/npm/dw/ra-language-greek.svg)](https://www.npmjs.com/package/ra-language-greek)
[![npm](https://img.shields.io/npm/v/ra-language-greek.svg)](https://www.npmjs.com/package/ra-language-greek)
[![npm](https://img.shields.io/npm/l/ra-language-greek.svg)](https://www.npmjs.com/package/ra-language-greek)

# Greek Translations for Admin-on-rest

Greek translations for [admin-on-rest](https://github.com/marmelab/admin-on-rest), the frontend framework for building admin applications on top of REST services.

![admin-on-rest demo](http://static.marmelab.com/admin-on-rest.gif)

## Installation

```sh
npm install --save ra-language-greek
```

## Usage

```js
import greekMessages from 'ra-language-greek';

const messages = {
    'el': greekMessages,
};

<Admin locale="el" messages={messages}>
  ...
</Admin>
```

## Versions

Download version aor-language-greek 0.0.7 for admin-on-rest 1.4.x

Download version ra-language-greek 0.1.x for react-admin 2.x.x

## License

This translation is licensed under the [MIT Licence](LICENSE), and sponsored by [marmelab](http://marmelab.com).
