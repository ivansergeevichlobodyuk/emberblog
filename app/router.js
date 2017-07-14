import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('blogs', {path: "/blogs"},function(){

  });
  this.route('blog', {
    path: '/blogs/:blog_id'
  });
  this.route('login');
});

export default Router;
