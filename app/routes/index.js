import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.store.findAll('game');
  },

  actions: {
    saveGame3(params) {
      var newGame = this.store.createRecord('game', params);
      newGame.save();
      this.transtionTo('index');
    }
  }
});
