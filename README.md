# Czech Messages for React-Admin

Greek messages for [react-admin](https://github.com/marmelab/react-admin), the frontend framework for building admin applications on top of REST/GraphQL services.

## Installation

```sh
npm install --save ra-language-greek
```

## Usage

```js
import elMessages from "ra-language-greek";
import polyglotI18nProvider from "ra-i18n-polyglot";

const messages = {
  el: elMessages,
};

const i18nProvider = polyglotI18nProvider((locale) => messages[locale]);

<Admin locale="el" i18nProvider={i18nProvider}>
  ...
</Admin>;
```

## License

This translation is licensed under the MIT License, and sponsored by [marmelab](http://marmelab.com).
