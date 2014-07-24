var Framework = (function () {

  var framework = {};
  // privateVariable = 1;

  // function privateMethod() {
  //   // ...
  // }

  framework.moduleProperty = 1;
  framework.moduleMethod = function () {
    // ...
  };

  return framework;

}());

// function Framework() {

// }

// Framework.prototype = {

// };

Framework.Event = (function () {

  function Event() {
    this.events = {};
  }

  Event.prototype = {

    on: function( name, callback ) {
      var callbacks = this.events[ name ] || ( this.events[ name ] = [] );
      callbacks.push( callback );
      return this;
    },

    off: function( name, callback ) {
      var callbacks, cblength, i, keep;

      keep = [];

      if ( this.events[ name ] && callback ) {
        callbacks = this.events[ name ];
        cblength = callbacks.length;

        for ( i = 0; i < cblength; i++ ) {
          if ( callbacks[ i ] !== callback ) {
            keep.push( callbacks[ i ] );
          }
        }
      }

      this.events[ name ] = keep;
      return this;
    },

    emit: function( name ) {
      var callbacks, cblength, i, args;

      if ( this.events[ name ] ) {
        callbacks = this.events[ name ];
        cblength = callbacks.length;
        args = Array.prototype.slice.call( arguments, 1 );

        for ( i = 0; i < cblength; i++ ) {
          callbacks[ i ].apply( this, args );
        }
      }
      return this;
    }

  };

  return Event;

}());

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
