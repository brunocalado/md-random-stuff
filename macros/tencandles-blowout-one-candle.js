const candleOn = 'modules/md-random-stuff/stuff/tencandles/vela-1-acesa_VP8.webm';
const candleBlowingOut = 'modules/md-random-stuff/stuff/tencandles/vela-2-apagando_VP8.webm';
const candleOff = 'modules/md-random-stuff/stuff/tencandles/vela-3-apagada_VP8.png';
const timeToBlowOut = 5000; // 5 secs - animation time - don't mess with it unless you know what you are doing.

/* APAGA UMA VELA
icon: icons/sundries/lights/candle-pillar-lit-yellow.webp

*/

/*
== Important - Tags
status_a = on
status_b = Blowing Out
status_c = off
*/

main();
const version = 'v0.1';

async function main() {  
  let candles = await Tagger.getByTag('status_a'); // Select all burning candles 
  let selectedCandle = candles[getRandom(0,candles.length-1)];
  let candles_on = candles.length;
  
  if ( (candles.length>0) ) { //avoid error    
    changeCandleStatusToOff( Tagger.getTags(selectedCandle) ); // turn off the candle

    let message1 = `Haviam dez.`;
    let message2 = `Agora tem ${candles_on-1}...`;
    let chatData = {
      speaker: null,
      content: `<div style="position:relative; background: #ddd9d5;padding: 0.5rem; margin-left:-7px;margin-right:-7px;margin-bottom:-7px;margin-top:-27px"><label class="titulo" style="font-size:35px; color: #b02b2e;">Velas</label><div style="position: absolute;top: 0;right: 0;width: 50px;height:50px;background: linear-gradient(45deg, #00000000 50%, #000000 50%);"></div><br><label style="font-size: 15px">${message1}</label><div style="margin-top:5px ;height: 5px;width: 100%;background: linear-gradient(20deg,  #000000 70%, #ddd9d500 70%);"></div><p>${message2}</p></div>`};
    ChatMessage.create(chatData, {});          
  }
}

// FUNCTIONS
async function changeCandleStatusToOff(candleTag) {
  let candle = await Tagger.getByTag(candleTag);  
  
  await Tagger.removeTags(candle[0], 'status_a');
  await Tagger.removeTags(candle[0], 'status_c');
  await Tagger.addTags(candle[0], 'status_c'); 
  
  new Sequence()
    .wait(1500)
    .thenDo(async() => { 
      await candle[0].document.update({img: candleBlowingOut});
    })
    .wait(timeToBlowOut)
    .thenDo(async() => { 
      await candle[0].document.update({img: candleOff});
    })      
    .play()  
}

function getRandom(min, max) { // return between min and max
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



