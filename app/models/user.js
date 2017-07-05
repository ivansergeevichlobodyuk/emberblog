import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    surname: DS.attr('string'),
    email: DS.attr('string'),
    comments: DS.hasMany('comment'),
    blogs: DS.hasMany('blog')
});
