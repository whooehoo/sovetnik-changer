# sovetnik-changer
Library paints yandex sovetnik or change it

## Install:

### npm or yarn

```sh
npm i sovetnik-changer

yarn add sovetnik-changer
```

```js
var sovetnikChanger = require('sovetnik-changer');

// ES6
import sovetnikChanger from 'sovetnik-changer';
```

### `<script>` old school 

```bash
# bash
git clone git@github.com:whooehoo/sovetnik-changer.git
```

```html
<!-- HTML -->
<script src="path/to/folder/sovetnik-changer/sovetnik-changer.min.js"></script>
```

## Example:

```js
sovetnikChanger({
  backgroundColor: '#000'
});
```

## Settings

Option | Default | Description
---------|-----------------------|---------
`backgroundColor` | `#fff` | Background-color, which paint sovetnik 
`backgroundImage` | `''` | Url of background-image, which change sovetnik 