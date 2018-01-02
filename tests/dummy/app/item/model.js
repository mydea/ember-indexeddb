import DS from 'ember-data';

const {
  Model,
  attr
} = DS;

export default Model.extend({

  title: attr('string'),

  date: attr('string'),

  isRead: attr('boolean', { defaultValue: false }),

  // This is not a "real" property, e.g. it would not exist on the server side
  // We keep this here to have this in the indexed db, and so we can query by it
  isSynced: attr('boolean', { defaultValue: true })

});
