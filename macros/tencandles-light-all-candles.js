const candleOn = 'modules/md-random-stuff/stuff/tencandles/vela-1-acesa_VP8.webm';
const candleBlowingOut = 'modules/md-random-stuff/stuff/tencandles/vela-2-apagando_VP8.webm';
const candleOff = 'modules/md-random-stuff/stuff/tencandles/vela-3-apagada_VP8.png';

/*
icon: icons/sundries/lights/torch-brown-lit.webp
*/
const version = 'v0.2';

async function restoreAllCandles() {
  let candles = await Tagger.getByTag('status_c');  
  for (let candle of candles) {
    await candle.document.update({img: candleOn});
    await Tagger.removeTags(candle, 'status_c');
    await Tagger.removeTags(candle, 'status_a');
    await Tagger.addTags(candle, 'status_a');       
  }
}

restoreAllCandles();