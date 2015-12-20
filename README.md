# eslint-rules
ESLint settings for udu

### eslint-local
To change the location of the eslint-local file, edit the `LOCAL_ESLINT` assignment in `package.json`

### Config file
To change the location of the config file [default precendence](http://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy), add a `-c <config-file-path>` option to the eslint call in package.json

---

### Examples:

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
#### ESLint With globbing (to specify which files to lint)
```
{
  ...
  "scripts": {
    "lint": "eslint \"**/*.js\" \"**/.*.js\""
  }
  ...
}
```

#### Just eslint-local:
```
{
  ...
  "scripts": {
    "lint": "LOCAL_ESLINT=../.eslint-local.json eslint",
  }
  ...
}
```

#### Just config file:
```
{
  ...
  "scripts": {
    "lint": "eslint -c __eslint_rules/.eslintrc.js",
  }
  ...
}
```

#### Both eslint-local and config:
```
{
  ...
  "scripts": {
    "lint": "LOCAL_ESLINT=../.eslint-local.json eslint -c __eslint_rules/.eslintrc.js",
  }
  ...
}
```