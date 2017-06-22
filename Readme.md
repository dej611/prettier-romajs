The goal of this repo is to compare the two tools Eslint and Prettier for code style formatting.

## Run the tools

There's a `code.js` file with JS and JSX unformatted content.

Execute `eslint --fix` first and check the fixes made.

```sh
$ npm run eslintfix -- eslint-code.js
```

Then execute `prettier` and check how it formats the code.

```sh
$ npm run prettier -- prettier-code.js
```

## Reset the code

There's a script in case you want to reset the JS files to the original state.

```sh
$ npm run reset
```