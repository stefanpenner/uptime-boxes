import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({
  tagName: 'server-uptime',
  upDays: computed('days', function() {
    return this.get('days').reduce((upDays, day) => {
      return upDays += (day.up ? 1 : 0);
    }, 0);
  }),

  streak: computed('days', function() {
    let [max] = this.get('days').reduce(([max, streak], day) => {
      if (day.up && streak + 1 > max) {
        return [streak + 1, streak + 1];
      } else if (day.up) {
        return [max, streak + 1];
      } else {
        return [max, 0];
      }
    }, [0, 0]);

    return max;
  })
});
