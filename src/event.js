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
