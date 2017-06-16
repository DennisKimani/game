import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(game, params) {
      this.sendAction('update', game, params);
    },
    delete(game) {
      if (confirm('Are you sure you want to Delete this game?')) {
        this.sendAction('destroyGame', game);
      }
    }
  }
});
