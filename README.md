# browserify-plain-jade

[browserify](https://github.com/substack/node-browserify) & [Jade](https://github.com/visionmedia/jade) - straight up.

## Another, really?

Yeah, I know, there's a _ton_ of browserify + Jade packages out there...but! Most of them include Jade's runtime in the compiled results, which is great if you want to use Jade's runtime.

Me? I just wanted to use Jade's slick syntax along with another templating language (like [mustache](http://mustache.github.io/)) and precompile the Jade templates with browserify. So...bam! Plain Jade. (Get it? Plain Jade...Plain **Jane**...ugh, it's really late at night right now.)

## How to install

```bash
npm install browserify-plain-jade
```

## How to use

Make some Jade:

```jade
h1 I am a very special penguin!
```

Require it:

```js
var template = require('./penguin-jade.jade');

$('.container').append(template);
```

browserify it with the JavaScript API:

```js
var bpj = require('browserify-plain-jade');

var b = browserify();
b.transform(bpj);
b.add('main.js');
b.bundle(...);
```

...or the CLI:

```bash
browserify -t browserify-plain-jade foo.jade > bundle.html
```

## Contribute

1. Fork
2. Create
3. Code
4. Push
5. Submit
6. Yay!

## License

(The MIT License)

Copyright (c) 2013 Ian Lollar

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
