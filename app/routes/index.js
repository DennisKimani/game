import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return Ember.RSVP.hash({
      game: this.store.findAll('game'),
      console: this.store.findAll('console')
  });
  },

  actions: {
    saveGame3(params) {
      var newGame = this.store.createRecord('game', params);
      newGame.save();
      this.transitionTo('index');
    },
    saveConsole(params) {
      var newConsole = this.store.createRecord('console', params);
      newConsole.save();
      this.transitionTo('index');
    }
  }
});
