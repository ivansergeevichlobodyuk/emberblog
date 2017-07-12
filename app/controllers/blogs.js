import Ember from 'ember';

export default Ember.Controller.extend({

  session: Ember.inject.service('session'),
  queryParams: ['search'],
  search: null,

  list: Ember.computed('search','model',function(){
    var search = this.get('search');
    if (search){
      return this.get('model').filterBy('text',search);
    }else{
      return this.get('model');
    }
  }),

  actions:{
    search(param){
        if (param){
          this.set('list',this.get('model').filterBy('text',param));
          this.set('search',param);
        }else{
          this.set('list',this.get('model'));
        }
    },
  }

});
