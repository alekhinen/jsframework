Framework.View = (function () {

  function View() {
    this.events = {};
  }

  View.prototype = {
    on:   Framework.Event.prototype.on,
    off:  Framework.Event.prototype.off,
    emit: Framework.Event.prototype.emit
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
