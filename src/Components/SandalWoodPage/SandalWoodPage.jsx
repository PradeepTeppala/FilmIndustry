import React from "react";
import SandalWoodHeader from "./SandalWoodHeader";
import SandalWoodDirector from "./SandalWoodDirector";
import SandalWoodHeroine from "./SandalWoodHeroine";
import SandalWoodHero from "./SandalWoodHero";
import SandalWoodMusicDirector from "./SandalWoodMusicDirector";

function SandalwoodPage() {
  return (
    <div>
      <SandalWoodHeader />
      <SandalWoodHero />
      <SandalWoodHeroine />
      <SandalWoodDirector />
      <SandalWoodMusicDirector />
    </div>
  );
}
export default SandalwoodPage;
