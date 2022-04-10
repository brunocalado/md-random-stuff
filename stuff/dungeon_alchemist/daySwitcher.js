// version 1.0
const sceneName = 'DA: River with Hut';
const day = 'modules/md-random-stuff/stuff/dungeon_alchemist/simple-river-hut-day.webp';
const dusk = 'modules/md-random-stuff/stuff/dungeon_alchemist/simple-river-hut-dusk.webp';
const night = 'modules/md-random-stuff/stuff/dungeon_alchemist/simple-river-hut-night.webp';

if (canvas.scene.name===sceneName) {
  main();
}

async function main() {

  if (canvas.scene.img===day) { // go to dusk 
    await canvas.scene.update({darkness: 0.35, globalLight: false, img: dusk});
  } else if (canvas.scene.img===dusk) { // go to night 
    await canvas.scene.update({darkness: 0.8, globalLight: false, img: night});
  } else if (canvas.scene.img===night) { // go to day 
    await canvas.scene.update({darkness: 0, globalLight: true, img: day});
  }
}