import React from "react";
import MollyWoodHeader from "./MollyWoodHeader";
import MollyWoodHero from "./MollyWoodHero";
import MollyWoodHeroine from "./MollyWoodHeroine";
import MollyWoodDirector from "./MollyWoodDirector";
import MollyWoodMusicDirector from "./MollyWoodMusicDirector";

function MollyWoodPage() {
  return (
    <div>
      <MollyWoodHeader />
      <MollyWoodHero />
      <MollyWoodHeroine />
      <MollyWoodDirector />
      <MollyWoodMusicDirector />
    </div>
  );
}

export default MollyWoodPage;
