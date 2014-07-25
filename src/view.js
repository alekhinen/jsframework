Framework.View = (function () {

  function View() {
    this.events = {};
    this.el = document.createElement( 'div' );
    document.body.appendChild( this.el );
  }

  View.prototype = {
    on:   Framework.Event.prototype.on,
    off:  Framework.Event.prototype.off,
    emit: Framework.Event.prototype.emit,

    render: function() {
      var html, tmpl, data;

      if ( this.template && this.model ) {
        html = document.querySelector( this.template ).innerHTML;
        data = this.model.toJSON();
        tmpl = _.template( html, data );
        this.el.innerHTML = tmpl;
      }
    }
  };

  View.extend = function( obj ) {
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

  return View;

}());
