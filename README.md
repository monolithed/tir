# Tir

> A simple logger


### Installation

```
npm install tir
```

### Synopsis

```
Tir.<info | warn | error | log>
```

All methods provide the same string interpolation like [util.format](http://nodejs.org/api/util.html#util_util_format_format).

![Example](https://habrastorage.org/files/3ba/eed/93a/3baeed93a1d64c44a2b1b36fee1d13cb.png)

#### .info

*Information message*

```js
Tir.info('Information %s', 'message');
```

#### .warn

*Warning message*

```js
Tir.warn('Warning %s', 'message');
```

#### .error

*Error message*

```js
Tir.error('Error %s', 'message');
```

* **fatal** — Fatal error with exit code 4 (EINTR)

```js
Tir.error('fatal', 'Error %s', 'message');
```

#### .log

*Universal method*

```js
Tir.log('info', 'Information %s', 'message');
```

### License

The library is licensed under the MIT (LICENSE.txt) license.