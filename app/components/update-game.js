import Ember from 'ember';

export default Ember.Component.extend({
  updateGameForm: false,
  actions: {
    updateGameForm() {
      this.set('updateGameForm', true);
    },
    update(game) {
      var params= {
        name: this.get('owner'),
        about: this.get('about'),
        age: this.get('age'),
        image: this.get('image'),
      };
      this.set('updateGameForm', false);
      this.sendAction('update', game, params);
    }
  }
});
