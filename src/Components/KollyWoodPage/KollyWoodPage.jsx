import React from "react";
import KollyWoodHeader from "./KollyWoodHeader";
import KollyWoodHero from "./KollyWoodHero";
import KollyWoodHeroine from "./KollyWoodHeroine";
import KollyWoodDirector from "./KollyWoodDirector";
import KollyWoodMusicDirector from "./KollyWoodMusicDirector";

function KollywoodPage() {
  return (
    <div>
      <KollyWoodHeader />
      <KollyWoodHero />
      <KollyWoodHeroine />
      <KollyWoodDirector />
      <KollyWoodMusicDirector />
    </div>
  );
}
export default KollywoodPage;
