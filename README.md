# eslint-rules
ESLint settings for udu 

#### Config file
To change the location of the config file [default config locations](http://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy), add a `-c <config_file_path>` option to the eslint call in package.json

#### .eslint-local config
To add a local config for eslint, add it using the `-c <config_file_path>` flag.

---

### Examples:
Each of these displays just the `scripts` object in a `package.json` file.

#### ESLint basic:
```
{
  ...
  "scripts": {
    "lint": "eslint ."
  }
  ...
}
```
#### With globbing (specifying which files/directories to lint)
```
{
  ...
  "scripts": {
    "lint": "eslint '**/*.js' '**/.*.js'"
  }
  ...
}
```

#### With eslint-local:
```
{
  ...
  "scripts": {
    "lint": "eslint -c .eslintrc.js -c .eslint-local.json .",
  }
  ...
}
```

#### With eslint-local + globbing
```
{
  ...
  "scripts": {
    "lint": "eslint -c .eslintrc.js -c .eslint-local.json '**/*.js' '**/.*.js'"
  }
  ...
}
```