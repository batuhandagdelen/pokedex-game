import React from "react";
import PokemonCard from "./PokemonCard";

const TeamSection = ({ team, teamName, totalXP, isWinner, color }) => {
  const borderColor = color === "red" ? "border-red-400" : "border-blue-400";
  const titleColor = color === "red" ? "text-red-600" : "text-blue-600";
  const bgColor = color === "red" ? "bg-red-50" : "bg-blue-50";
  const xpColor = color === "red" ? "text-red-700" : "text-blue-700";

  return (
    <div
      className={`flex flex-col gap-4 rounded-3xl border-2 ${borderColor} ${bgColor} p-6 shadow-lg flex-1`}
    >
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h2
          className={`text-2xl font-extrabold tracking-wide ${titleColor} flex items-center gap-2`}
        >
          {teamName}
          <span
            className={`text-sm font-bold text-yellow-500 bg-yellow-100 border border-yellow-300 rounded-full px-2 py-0.5 ${isWinner ? "visible" : "invisible"}`}
          >
            KAZANAN 🏆
          </span>
        </h2>
        <p className={`text-lg font-bold ${xpColor}`}>
          Toplam XP: <span className="text-xl">{totalXP}</span>
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {team.map((p) => (
          <PokemonCard key={p.id} pokemon={p} />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
