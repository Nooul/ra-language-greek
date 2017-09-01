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
    'gr': greekMessages,
};

<Admin locale="gr" messages={messages}>
  ...
</Admin>
```

## License

This translation is licensed under the [MIT Licence](LICENSE), and sponsored by [marmelab](http://marmelab.com).
