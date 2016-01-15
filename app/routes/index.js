import Ember from 'ember';

function server(name) {
  let days = [];

  for (let i=0; i<=364; i++) {
    let up = Math.random() > 0.2;
    days.push({ number: i, up });
  }

  return { name, days };
}

export default Ember.Route.extend({
  model() {
    return servers();
  },

  afterModel(model) {
    tick(model);
  }
});

function tick(model) {
  console.log('tick')
  self.requestAnimationFrame(_ => {
    let s = servers();
    model.replace(0, s.length, s);

    tick(model);
  });
}

function servers() {
  return [
    server("Stefan's Server"),
    server("Godfrey's Server"),
    server("Yehuda's Server"),
    server("Chad's Server"),
    server("Robert's Server 1"),
    server("Robert's Server 2"),
    server("Robert's Server 3"),
    server("Robert's Server 4"),
    server("Robert's Server 5"),
    server("Robert's Server 6")
  ];
}
