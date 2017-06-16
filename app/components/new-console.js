import Ember from 'ember';

export default Ember.Component.extend({
  addNewConsole: false,
  actions: {
    consoleFormShow() {
      this.set('addNewConsole', true);
    },
    saveConsole() {
      var params = {
        viewer: this.get('viewer'),
        comment: this.get('comment'),
        rating: this.get('rating'),
        img: this.get('img')
      };
      tis.set('addNewConsole', false);
      this.sendAction('saveConsole', params);
    }
  }
});
