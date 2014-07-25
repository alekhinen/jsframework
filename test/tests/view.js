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
