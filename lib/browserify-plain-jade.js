var through = require('through');
var jade = require('jade');

module.exports = function(file) {
  if (!/\.jade$/.test(file)) {
    return through();
  }

  var data = '';

  function write(buf) {
    data += buf;
  }

  function end() {
    var that = this;

    jade.render(data, null, function(err, html) {
      html = html.replace(/\"/g, '\u005C\u0022');
      html = html.replace(/^(.*)/gm, '"$1');
      html = html.replace(/(.+)$/gm, '$1" +');
      html = html.replace(/\+$/, '');

      html = 'module.exports = ' + html + ';\n';

      that.queue(html);
      that.queue(null);
    });
  }

  return through(write, end);
};
