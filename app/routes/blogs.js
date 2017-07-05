import Ember from 'ember';


let posts = [
{
  id: 1,
  title: 'Acticle 1',
  text: 'San Francisco',
  datetime: '01-01-2015',
  image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
},
{
  id: 2,
  title: 'Acticle 2',
  text: 'Text 2',
  datetime: '01-02-2015',
  image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
},
 {
  id: 1,
  title: 'Acticle 3',
  text: 'San Article 3',
  datetime: '01-01-2016',
  image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
}
];

export default Ember.Route.extend({
  model(){
      return this.store.findAll('blog');
//    return posts;
  }
});
