# Tir

> It's just a wrapper with colorization around [Winston](https://www.npmjs.com/package/winston).


### Installation

```
npm install tir
```

### Synopsis

```
Tir.<info | warn | error | log>
```

![Example](./files/preview.png)


### Usage

```ts
import { Log } from 'tir';

Log.info('message %j', { x: 1 });
```

The first argument is a string containing zero or more placeholder tokens. Each placeholder token is replaced with the converted value from the corresponding argument.<br />
<br />
Supported placeholders are:<br />

* **%s** - String.
* **%d** - Number (integer or floating point value).
* **%i** - Integer.
* **%f** - Floating point value.
* **%j** - JSON. Replaced with the string '[Circular]' if the argument contains circular references.
* **%%** - single percent sign ('%'). This does not consume an argument.

#### .info

*Information message*

```js
Log.info('Information %s', 'message');
```

#### .warn

*Warning message*

```js
Log.warn('Warning %s', 'message');
```

#### .error

*Error message*

```js
Log.error('Error %s', 'message');
```

#### .log

*Universal method*

```js
import { Log as Tir } from 'tir';

Tir.log('info', 'Information %s', 'message');
```

### License

The library is licensed under the MIT (LICENSE.txt) license.
