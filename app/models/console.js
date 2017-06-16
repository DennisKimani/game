import DS from 'ember-data';

export default DS.Model.extend({
  viewer: DS.attr(),
  rating: DS.attr(),
  comment: DS.attr(),
  img: DS.attr(),
});
