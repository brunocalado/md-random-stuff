// Press F5 to stop
const timeToTryToBlowOut = game.settings.get("md-random-stuff", "timetoblowcandle"); // 10 secs

/*
icon: icons/magic/time/clock-stopwatch-white-blue.webp
*/
const version = 'v0.1';
setInterval(() => game.macros.getName("Auto Danger - Ten Candles").execute(), timeToTryToBlowOut);
