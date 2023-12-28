"use client";

import classNames from "classnames";
import Footer from "./ui/footer";
import Menu from "./ui/menu";
import Modal from "./ui/modal";
import { GameState, Player } from "./types";
import { deriveGame, deriveStats } from "./utils";
import { FaX, FaO } from "react-icons/fa6";
import { useLocalStorage } from "./useLocalStorage";
import { cloneDeep } from "lodash";

export default function Home() {
  const [state, setState] = useLocalStorage<GameState>("game-state-key", {
    currentGameMoves: [],
    history: {
      currentRoundGames: [],
      allGames: [],
    },
  });

  const game = deriveGame(state);
  const stats = deriveStats(state);

  function resetGame(isNewRound: boolean) {
    // Menu.tsx → setMenuOpen((prev) => false)}
    // Não sei como se deve controlar um state de outro arquivo. Exportar de lá? ...
    setState((prev: GameState) => {
      const stateClone = cloneDeep(prev);
      const { status, moves } = game;

      if (status.isComplete) {
        stateClone.history.currentRoundGames.push({
          moves,
          status,
        });
      }

      stateClone.currentGameMoves = [];

      if (isNewRound) {
        stateClone.history.allGames.push(...stateClone.history.currentRoundGames);
        stateClone.history.currentRoundGames = [];
      }

      return stateClone;
    });
  }

  function handlePlayerMove(squareId: number, player: Player) {
    setState((prev: GameState) => {
      const stateClone = cloneDeep(prev);

      stateClone.currentGameMoves.push({
        squareId,
        player,
      });

      // =x=x=x=x=x=x=x=x=x=x=x
      // =x=x Teste - Next =x=x
      console.log(`Square ${squareId} clicked by player ${player.name}.`);
      console.log(deriveGame(state));

      return stateClone;
    });
  }

  {
    /* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x
    x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */
  }

  return (
    <>
      <main>
        <div className="grid grid-cols-[80px_80px_80px] grid-rows-[50px_80px_80px_80px_60px] gap-5 md:grid-cols-[160px_160px_160px] md:grid-rows-[50px_160px_160px_160px_60px]">
          <div className={classNames("col-start-1 col-end-3 self-center flex items-center gap-5", game.currentPlayer.colorClass)}>
            <div className={classNames("animate-turnIconAnimation", game.currentPlayer.colorClass)}>{game.currentPlayer.id === 1 ? <FaX /> : <FaO />} </div>
            <p className="animate-turnTextAnimation">{`Vez do ${game.currentPlayer.name}`}</p>
          </div>

          <Menu onAction={(action) => resetGame(action === "new-round")} />

          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((squareId) => {
            const existingMove = game.moves.find((move) => move.squareId === +squareId);

            return (
              <div
                key={squareId}
                className="flex justify-center items-center text-5xl rounded-lg bg-white/10 hover:cursor-pointer hover:placeholder-opacity-90 shadow-lg shadow-black/30"
                onClick={() => {
                  if (existingMove) {
                    // =x=x=x=x=x=x=x=x=x=x=x
                    // =x=x Teste - Next =x=x
                    console.log(`Clicked square already has an existing move.`);
                    return;
                  }

                  handlePlayerMove(squareId, game.currentPlayer);
                }}
              >
                {existingMove && <div className={existingMove.player.colorClass}>{existingMove.player.id === 1 ? <FaX /> : <FaO />}</div>}
              </div>
            );
          })}

          <div className="flex flex-col justify-center items-center rounded-lg shadow-lg shadow-black/30 player-x-surface-color">
            <p className="text-sm font-bold">{stats.playerWithStats[0].name}</p>
            <span className="text-xs mt-0.5">{stats.playerWithStats[0].wins}</span>
          </div>
          <div className="flex flex-col justify-center items-center rounded-lg shadow-lg shadow-black/30 surface-color-ties">
            <p className="text-sm font-bold">Empates</p>
            <span className="text-xs mt-0.5">{stats.ties}</span>
          </div>
          <div className="flex flex-col justify-center items-center rounded-lg shadow-lg shadow-black/30 player-o-surface-color">
            <p className="text-sm font-bold">{stats.playerWithStats[1].name}</p>
            <span className="text-xs mt-0.5">{stats.playerWithStats[1].wins}</span>
          </div>
        </div>
      </main>

      <Footer />

      {game.status.isComplete && <Modal winnerBg={game.status.winner?.bgColorClass || "surface-color-ties"} message={game.status.winner ? `${game.status.winner.name} venceu!` : "Empate!"} onClick={() => resetGame(false)} />}
    </>
  );
}
