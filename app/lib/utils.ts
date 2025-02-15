import type { Player, GameState } from "./types";

const players: Player[] = [
  {
    id: 1,
    name: "Jogador 1",
    iconClass: "fa-x", // Teria que mudar para o componente.
    colorClass: "text-player-xDark",
    bgColorClass: "bg-player-x dark:bg-player-xDark",
  },
  {
    id: 2,
    name: "Jogador 2",
    iconClass: "fa-o", // Teria que mudar para o componente.
    colorClass: "text-player-oDark",
    bgColorClass: "bg-player-o dark:bg-player-oDark",
  },
];

export function deriveGame(state: GameState) {
  const currentPlayer = players[state.currentGameMoves.length % 2];

  const winningPatterns = [
    [1, 2, 3],
    [1, 5, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 5, 7],
    [3, 6, 9],
    [4, 5, 6],
    [7, 8, 9],
  ];

  let winner = null;

  for (const player of players) {
    const selectedSquareIds = state.currentGameMoves.filter((move) => move.player.id === player.id).map((move) => move.squareId);

    for (const pattern of winningPatterns) {
      if (pattern.every((squareId) => selectedSquareIds.includes(squareId))) {
        winner = player;
      }
    }
  }

  return {
    moves: state.currentGameMoves,
    currentPlayer,
    status: {
      isComplete: winner != null || state.currentGameMoves.length === 9,
      winner,
    },
  };
}

export function deriveStats(state: GameState) {
  return {
    playerWithStats: players.map((player) => {
      const wins = state.history.currentRoundGames.filter((game) => game.status.winner?.id === player.id).length;

      return {
        ...player,
        wins,
      };
    }),

    ties: state.history.currentRoundGames.filter((game) => game.status.winner === null).length,
  };
}
