import React, { useMemo, useState } from "react";
import { pokemon } from "./data/pokemon";
import { splitIntoTeams } from "./utils/shuffle";
import TeamSection from "./components/TeamSection";
import ResultBanner from "./components/ResultBanner";

const App = () => {
  const [battleKey, setBattleKey] = useState(0);

  const { teamRed, teamBlue } = useMemo(
    () => splitIntoTeams(pokemon),
    [battleKey],
  );

  const redXP = teamRed.reduce((total, p) => total + p.base_experience, 0);
  const blueXP = teamBlue.reduce((total, p) => total + p.base_experience, 0);

  const result = redXP > blueXP ? "red" : blueXP > redXP ? "blue" : "draw";

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 to-slate-200 flex flex-col items-center py-15 px-4 gap-8">
      <header className="text-center">
        <h1 className="text-5xl font-black tracking-tight text-slate-800">
          Pokedex Savaşı
        </h1>
      </header>

      <ResultBanner result={result} redXP={redXP} blueXP={blueXP} />

      <button
        onClick={() => setBattleKey((counter) => counter + 1)}
        className="px-8 py-3 rounded-2xl bg-slate-800 text-white font-bold text-base shadow-lg hover:bg-slate-700 active:scale-95 transition-all duration-150 cursor-pointer"
      >
        ⚔️ Yeni Savaş
      </button>

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl">
        <TeamSection
          team={teamRed}
          teamName="Kırmızı Takım"
          totalXP={redXP}
          isWinner={result === "red"}
          color="red"
        />
        <TeamSection
          team={teamBlue}
          teamName="Mavi Takım"
          totalXP={blueXP}
          isWinner={result === "blue"}
          color="blue"
        />
      </div>
    </div>
  );
};

export default App;
