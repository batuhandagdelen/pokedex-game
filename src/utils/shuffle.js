export const splitIntoTeams = (pokemonList) => {
  const shuffled = [...pokemonList].sort(() => Math.random() - 0.5);
  return {
    teamRed: shuffled.slice(0, 4),
    teamBlue: shuffled.slice(4, 8),
  };
};
