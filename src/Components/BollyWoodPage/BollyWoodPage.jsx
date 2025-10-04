import React from "react";
import BollyWoodHeader from "./BollyWoodHeader";
import BollyWoodHero from "./BollyWoodHero";
import BollyWoodHeroine from "./BollyWoodHeroine";
import BollyWoodDirector from "./BollyWoodDirector";
import BollyWoodMusicDirector from "./BollyWoodMusicDirector";

function BollyWoodPage() {
  return (
    <div>
      <BollyWoodHeader />
      <BollyWoodHero />
      <BollyWoodHeroine />
      <BollyWoodDirector />
      <BollyWoodMusicDirector />
    </div>
  );
}
export default BollyWoodPage;
