import Ember from 'ember';

export default Ember.Component.extend({
  addNewGame: false,
  actions: {
    gameFormShow() {
      this.set('addNewGame', true);
    }
  }
});
