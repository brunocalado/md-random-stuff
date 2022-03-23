class mdrandomstuff { 
  // ---------------------------------------------------------------
  // Helper
  static async macroRun(macroName, compendiumName='md-random-stuff.macros-do-md') {  
    let pack = game.packs.get(compendiumName);
    const macro = ( await pack.getDocuments() ).find(i => (i.data.name==macroName) );

    // Get the data from the macro in the compendium in a JS object form
    let macro_data = macro.toObject();
    let temp_macro = new Macro(macro_data);
    temp_macro.data.permission.default = 3;
    await temp_macro.execute(); 
  }
  
}