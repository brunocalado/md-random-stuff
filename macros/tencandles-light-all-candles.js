const candleOn = 'modules/md-random-stuff/stuff/tencandles/vela-1-acesa_VP8.webm';
const candleBlowingOut = 'modules/md-random-stuff/stuff/tencandles/vela-2-apagando_VP8.webm';
const candleOff = 'modules/md-random-stuff/stuff/tencandles/vela-3-apagada_VP8.png';

/*
icon: icons/sundries/lights/torch-brown-lit.webp
*/
const version = 'v0.4';
await restoreAllCandles();

async function restoreAllCandles() {
  let candles = await Tagger.getByTag('candle');  
  for (let candle of candles) {
    console.log(candle)
    await candle.update({img: candleOn});
    await Tagger.removeTags( candle, ['status_c', 'status_a'] );
    await Tagger.addTags(candle, 'status_a');       
  }
}
