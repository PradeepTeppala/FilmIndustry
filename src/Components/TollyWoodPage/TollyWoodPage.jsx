import TollyWoodDirector from "./TollyWoodDirector";
import TollyWoodHeader from "./TollyWoodHeader";
import TollyWoodHero from "./TollyWoodHero";
import TollyWoodHeroine from "./TollyWoodHeroine";
import TollyWoodMusicDirector from "./TollyWoodMusicDirector";

function TollyWoodPage() {
  return (
    <>
      <TollyWoodHeader />
      <TollyWoodHero />
      <TollyWoodHeroine />
      <TollyWoodDirector />
      <TollyWoodMusicDirector />
    </>
  );
}

export default TollyWoodPage;
