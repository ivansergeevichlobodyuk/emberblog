import Ember from 'ember';

export default Ember.Controller.extend({

  session: Ember.inject.service('session'),

  queryParams: ['search'],
    list: null,
    search: null,
    init(){
      console.log('search ', this.get('search'));
      if ( this.search ){
        this.set('list',this.get('model').filterBy('text',param));
      }else{
        this.list = this.store.findAll('blog');
      }
    },

    actions:{
      search(param){

        console.log( 'alerttt', param );
        if (param){
          this.set('list',this.get('model').filterBy('text',param));
          this.set('search',param);
        }else{
          this.set('list',this.get('model'));
        }
      }
    }

});
