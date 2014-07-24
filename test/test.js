var expected;

describe( 'Running through methods for Model', function() {
  expected = new Framework.Model({
    name: 'tyler',
    occupation: 'loitering',
    company: 'loiter squad'
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

});
