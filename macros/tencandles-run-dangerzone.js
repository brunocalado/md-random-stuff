const dangerZoneName = 'Vento'; // dangerzone danger

/*
icon: icons/weapons/thrown/bomb-fuse-red-black.webp
*/

const currentSceneID = game.scenes.current.id;
dangerZone.triggerZone(dangerZoneName, currentSceneID);
