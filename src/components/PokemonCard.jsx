import React from "react";

const TYPE_STYLES = {
  fire:     { bg: "bg-orange-100", badge: "bg-orange-500",  text: "text-orange-800" },
  water:    { bg: "bg-blue-100",   badge: "bg-blue-500",    text: "text-blue-800"   },
  bug:      { bg: "bg-lime-100",   badge: "bg-lime-600",    text: "text-lime-800"   },
  flying:   { bg: "bg-sky-100",    badge: "bg-sky-500",     text: "text-sky-800"    },
  electric: { bg: "bg-yellow-100", badge: "bg-yellow-400",  text: "text-yellow-800" },
  normal:   { bg: "bg-gray-100",   badge: "bg-gray-400",    text: "text-gray-700"   },
  poison:   { bg: "bg-purple-100", badge: "bg-purple-600",  text: "text-purple-800" },
};

const fallback = { bg: "bg-gray-100", badge: "bg-gray-400", text: "text-gray-700" };

const PokemonCard = ({ pokemon }) => {
  const { name, type, base_experience, id } = pokemon;
  const style = TYPE_STYLES[type] ?? fallback;
  const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div
      className={`flex flex-col items-center rounded-2xl shadow-md p-4 gap-2 ${style.bg} border border-white/60 hover:scale-105 transition-transform duration-200`}
    >
      <img
        src={sprite}
        alt={name}
        className="w-20 h-20 object-contain drop-shadow-md"
        loading="lazy"
      />
      <p className="font-bold text-gray-800 text-base">{name}</p>
      <span
        className={`text-xs font-semibold text-white px-3 py-0.5 rounded-full capitalize ${style.badge}`}
      >
        {type}
      </span>
      <p className={`text-sm font-semibold ${style.text}`}>
        XP: <span className="font-bold">{base_experience}</span>
      </p>
    </div>
  );
};

export default PokemonCard;
