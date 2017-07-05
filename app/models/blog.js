import DS from 'ember-data';

export default DS.Model.extend({
  name:     DS.attr('string'),
  text:     DS.attr('string'),
  date:     DS.attr('string'),
  comment: DS.hasMany('comment'),
  user_id:  DS.belongsTo('user')
});

