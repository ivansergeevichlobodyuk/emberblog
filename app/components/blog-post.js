import Ember from 'ember';
export default Ember.Component.extend({

  didInsertElement: function() {
    console.log('this parent view ',this.get('targetObject'));
    this.set('storeName', this.get('parentView.targetObject.store'));
  },

});
