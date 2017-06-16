import Ember from 'ember';

export default Ember.Component.extend({
  addNewGame: false,
  actions: {
    gameFormShow() {
      this.set('addNewGame', true);
    },
    saveGame1() {
      var params = {
        name: this.get('name'),
        about: this.get('about'),
        age: this.get('age'),
        image: this.get('image'),
      };
      this.set('addNewGame', false);
      this.sendAction('saveGame2', params);
    }
  }
});
