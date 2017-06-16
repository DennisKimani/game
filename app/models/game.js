import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  about: DS.attr(),
  age: DS.attr(),
  image: DS.attr()
});
