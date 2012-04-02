/*global fontomas, Backbone*/

;(function () {
  "use strict";


  fontomas.models.glyph = Backbone.Model.extend({
    validate: function (attrs) {
      var c       = attrs.unicode_code,
          ok_val  = (0      <= c && c <= 0x10ffff),
          nonchar = (0xfdd0 <= c && c <= 0xfdef) ||
                    (c % 0x10000 === 0xfffe) ||
                    (c % 0x10000 === 0xffff);

      if (!ok_val || nonchar) {
        fontomas.logger.debug("models.glyph.validate: bad unicode code point:", c);
        return "Bad unicode code point " + c;
      }
    },


    // Stub to prevent Backbone from reading or saving the model to the server.
    // Backbone calls `Backbone.sync()` function (on fetch/save/destroy)
    // if model doesn't have own `sync()` method.
    sync: function () {}
  });

}());