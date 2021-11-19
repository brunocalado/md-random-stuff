class mdrandomstuff { 
  // ---------------------------------------------------------------
  // Helper
  static async macroRun(macroName, compendiumName='md-random-stuff.macros-do-md') {  
    let pack = game.packs.get(compendiumName);
    let macro = ( await pack.getDocuments() ).find(i => (i.data.name==macroName) );
    await macro.execute();    
  }
  
}
