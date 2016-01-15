import Ember from 'ember';
const { computed } = Ember;

export default Ember.Component.extend({
  tagName: 'uptime-day',
  color: computed('day.up', function() {
    return this.get('day.up') ? '#8cc665' : '#ccc';
  }),

  memo: computed('day.up', function() {
    return this.get('day.up') ? 'Servers operational!' : 'Red alert!';
  })
});
