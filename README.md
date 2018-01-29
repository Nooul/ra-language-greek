[![npm](https://img.shields.io/npm/dw/aor-language-greek.svg)](https://www.npmjs.com/package/aor-language-greek)
[![npm](https://img.shields.io/npm/v/aor-language-greek.svg)](https://www.npmjs.com/package/aor-language-greek)
[![npm](https://img.shields.io/npm/l/aor-language-greek.svg)](https://www.npmjs.com/package/aor-language-greek)

# Greek Translations for Admin-on-rest

Greek translations for [admin-on-rest](https://github.com/marmelab/admin-on-rest), the frontend framework for building admin applications on top of REST services.

![admin-on-rest demo](http://static.marmelab.com/admin-on-rest.gif)

## Installation

```sh
npm install --save aor-language-greek
```

## Usage

```js
import greekMessages from 'aor-language-greek';

const messages = {
    'el': greekMessages,
};

<Admin locale="el" messages={messages}>
  ...
</Admin>
```

## License

This translation is licensed under the [MIT Licence](LICENSE), and sponsored by [marmelab](http://marmelab.com).
