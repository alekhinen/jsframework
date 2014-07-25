var expected, ExpectedModel;

describe( 'Running through methods for Model', function() {
  expected = new Framework.Model({
    name: 'tyler',
    occupation: 'loitering',
    company: 'loiter squad'
  });

  ExpectedModel = Framework.Model.extend({
    getWild: function() {
      return 'ASDFKEAF:FLEAXXS';
    }
  });

  it( 'should get attributes', function() {
    assert.equal( expected.get( 'name' ), 'tyler' );
    assert.equal( expected.get( 'occupation' ), 'loitering' );
    assert.equal( expected.get( 'company' ), 'loiter squad' );
  });

  it( 'should set attributes', function() {
    assert.equal( expected.set( 'name', 'earl' ).get( 'name' ), 'earl' );
    assert.equal( expected.set( 'grunt', function() {
      return 'GRUNT';
    } ).get( 'grunt' )(), 'GRUNT' );
  });

  it( 'should extend Model', function() {
    expected = new ExpectedModel({
      first_name: 'bingo',
      last_name: 'bingerson',
      occupation: 'bouncer',
      company: 'leeroy\'s'
    });

    assert.equal( expected.getWild(), 'ASDFKEAF:FLEAXXS' );
    assert.equal( expected.get('last_name'), 'bingerson' );
  });

  it( 'should listen to Model changes', function() {
    expected = new ExpectedModel({
      first_name: 'bingo'
    });
    expected.on( 'change', function() {
      return 'something changed';
    });
    assert.equal( expected.set('last_name', 'adams'), 'something changed' );
  });

});

var ExampleModel = Framework.Model.extend();

var xModel = new ExampleModel({
  name: 'joe schmoe',
  occupation: 'being a bum'
});

var ExampleView = Framework.View.extend({
  template: '#example-tmpl',

  events: { // is not working
    'change': this.render
  }
});

var xView = new ExampleView({
  model: xModel
});

xView.render();
