Hooks.once('init', function() {

  // ======================================
  // TEN CANDLES
  // ======================================
  // call this with: game.settings.get("md-random-stuff", "timetoblowcandle")
  game.settings.register('md-random-stuff', 'timetoblowcandle', {
    name: 'Ten Candles - Wind Cycle Time',
    hint: 'Add a number in miliseconds to define the wind cycle. 2000 is equal to 2 seconds.',
    scope: 'world',
    config: true,
    default: 1000,
    type: Number
  });
  
  // call this with: game.settings.get("md-random-stuff", "chancetoblowcandle")
  game.settings.register('md-random-stuff', 'chancetoblowcandle', {
    name: 'Ten Candles - Wind Cycle Time',
    hint: 'This number is the chance of blow the candle. 0.05 is igual to 5%.',
    scope: 'world',
    config: true,
    default: 0.05,
    type: Number
  });

});
