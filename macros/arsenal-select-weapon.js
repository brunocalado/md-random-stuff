/*

icon: icons/commodities/tech/levers-colored.webp
*/

const version = 'v0.1';
//const path = '3d/weapons/';
const path = 'modules/canvas3dcompendium/assets/weapons/';

let tokenD = canvas.scene.tokens.filter( e=> e.name==='Base Weapon' )[0];

// id, name, path, scale, offsetY, rotateY, rotateZ
// 0 |  1  |  2  |   3  |    4    |   5   |   6
let models = [
    [0, 'Laser Gun 1', 'modules/md-random-stuff/stuff/arsenal/laser_gun.glb', '3', 100, 0, 0 ],
    [1, 'Sniper Rifle 1', path + 'scifi/sci_fi_sniper_rifle.glb', '9', 0, 90, 0 ],
    [2, 'Shotgun 1', path + 'modern/shotgun.glb', '8', 380, 0, 345 ],
    [3, 'Sword Stun 1', path + 'scifi/scifi_stun_sword.glb', '10', 26, 0, 0 ],    
    [4, 'Submachine Gun 1', path + 'scifi/sci-fi_submachine_gun.glb', '8', 180, 0, 0 ],        
    [5, 'Quad Barrel shotgun', path + 'scifi/quad_barrel_shotgun.glb', '7', 200, 0, 0 ],
    [6, 'Nemesis Sniper Rifle', path + 'scifi/nemesis_sniper_rifle/scene.gltf', '9', 90, 90, 0 ],            
    [7, 'Cyborg Weapon', path + 'scifi/cyborg_weapon.glb', '7', 130, 90, 0 ],
    [8, 'Planetside 2 Prototype', path + 'scifi/planetside_2_prototype_weapon.glb', '9', 0, 45, 0 ],
    [9, 'ARX-160', path + 'modern/arx-160_weapon.glb', '6', 140, 0, 0 ],
    [10, 'Pistol 1', path + 'scifi/scifi_pistol.glb', '5', 0, 0, 0 ],
    [11, 'Submachine Gun 2', path + 'scifi/sci-fi_submachine_gun_2.glb', '7', 100, 0, 0 ],
    [12, 'Sci Fi Weapon 1', path + 'scifi/sci-fi_gun.glb', '7', 56, 0, 350 ],
    [13, 'Shotgun 2', path + 'modern/shotgun_2.glb', '7', 54, 90, 0 ]
  ];

/*
icon: icons/commodities/tech/levers-colored.webp

*/

main();

function main() { 
  let counter = 0;
  let modelsName = arrayColumn(models, 1); 
  let modelsNameList = ``;
  modelsName.map((t) => {    
    modelsNameList += `<option value="${counter}">"${t}"</option>`;    
    counter+=1;
  });  
  
  let dialogue_content = `
    <h2 style="text-align:center;">Peace was never an option<h2>
    <form>    
      <div class="form-group">      
        <label for="aeType">Weapon:</label>
        <input list="aeTypes" id="aeType" name="aeType">
        <datalist id="aeTypes">
          ${modelsNameList}
        </datalist>  
      </div>
    </form>
`;

  let applyChanges = false;
  let dialogButtons = {
    yes: {
      icon: "<i class='fas fa-check'></i>",
      label: `Change`,
      callback: (html) => {
        changeWeapon(html);
      }
    },
    no: {
      icon: "<i class='fas fa-times'></i>",
      label: `Cancel`
    }   
  }

  // Main Dialogue    
  new Dialog({
    title: `Weapon Select - ${version}`,
    content: dialogue_content,
    buttons: dialogButtons,
    default: "yes",
  }).render(true);
}

async function changeWeapon(html) {
  let weaponID = html.find("#aeType")[0].value;
  
  let path = arrayColumn(models, 2)[weaponID]; 
  let scale = arrayColumn(models, 3)[weaponID]; 
  let offsetY = arrayColumn(models, 4)[weaponID]; 
  let rotationY = arrayColumn(models, 5)[weaponID]; 
  let rotationZ = arrayColumn(models, 6)[weaponID]; 

//  await tokenD.setFlag("levels-3d-preview", "model3d", path); // path
  await tokenD.update({
    flags: {"levels-3d-preview": {
      "model3d" : path,
      "scale" : scale,
      "offsetY": offsetY,
      "rotationY": rotationY,
      "rotationZ": rotationZ
  }}})
}

function arrayColumn(twoDimensionalArray, column) {
  const arrayColumn = (arr, n) => arr.map(x => x[n]);
  return arrayColumn(twoDimensionalArray, column);
}