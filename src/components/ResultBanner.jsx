import React from "react";

const ResultBanner = ({ result, redXP, blueXP }) => {
  const isDraw = result === "draw";
  const redWins = result === "red";

  const bannerStyle = isDraw
    ? "bg-linear-to-r from-gray-200 to-gray-300 border-gray-400 text-gray-700"
    : redWins
    ? "bg-linear-to-r from-red-400 to-rose-500 border-red-600 text-white"
    : "bg-linear-to-r from-blue-400 to-indigo-500 border-blue-600 text-white";

  const message = isDraw
    ? "Berabere! İki takım da eşit."
    : redWins
    ? "Kırmızı Takım Kazandı!"
    : "Mavi Takım Kazandı!";

  return (
    <div
      className={`rounded-2xl border-2 shadow-xl px-8 py-5 flex flex-col items-center gap-1 ${bannerStyle}`}
    >
      <p className="text-3xl font-extrabold tracking-tight">{message}</p>
      <p className="text-sm font-medium opacity-90">
        Kırmızı Takım: <strong>{redXP} XP</strong> &nbsp;|&nbsp; Mavi Takım:{" "}
        <strong>{blueXP} XP</strong>
      </p>
    </div>
  );
};

export default ResultBanner;
