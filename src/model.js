Framework.Model = (function () {

  function Model( attributes ) {
    this.attributes = {};
    this.events = {};

    for ( var key in attributes ) {
      this.attributes[ key ] = attributes[ key ];
    }
  }

  Model.prototype = {
    get: function( attr ) {
      if ( this.attributes[ attr ] ) {
        return this.attributes[ attr ];
      } else {
        return false;
      }
    },

    set: function( attr, val ) {
      this.attributes[ attr ] = val;
      this.emit( 'change', attr, val );
      return this;
    },

    toJSON: function() {
      var result = {};

      for ( var key in this.attributes ) {
        result[ key ] = this.attributes[ key ];
      }

      return result;
    },

    on:   Framework.Event.prototype.on,
    off:  Framework.Event.prototype.off,
    emit: Framework.Event.prototype.emit
  };

  Model.extend = function( obj ) {
    var self = this;
    var Child = function() {
      self.apply( this, arguments );
    };
    Child.prototype = Object.create( this.prototype );

    for ( var k in obj ) {
      Child.prototype[ k ] = obj[ k ];
    }

    return Child;
  };

  return Model;

}());
