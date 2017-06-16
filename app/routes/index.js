import Ember from 'ember';

export default Ember.Route.extend({
  model () {
  //  return Ember.RSVP.hash({
      return this.store.findAll('game');
    //  console: this.store.findAll('console');
  },

  actions: {
    saveGame3(params) {
      var newGame = this.store.createRecord('game', params);
      newGame.save();
      this.transtionTo('index');
    }
  }
});
