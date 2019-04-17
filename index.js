const str2ms = require("./str2ms");

module.exports = {
  s: function(str) {
    return str2ms.ms(str) / 1000;
  },
  ms: str2ms.ms
};
