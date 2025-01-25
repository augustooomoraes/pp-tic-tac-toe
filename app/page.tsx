"use client";

import classNames from "classnames";
import Footer from "./ui/footer";
import Menu from "./ui/menu";
import Modal from "./ui/modal";
import { GameState, Player } from "./lib/types";
import { deriveGame, deriveStats } from "./lib/utils";
import { FaX, FaO } from "react-icons/fa6";
import { useLocalStorage } from "./lib/useLocalStorage";
import { cloneDeep, set } from "lodash";
import { ThemeToggle } from "./ui/themeToggle/theme-toggle";
import { useEffect, useState } from "react";

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

  const [animateIcon, setAnimateIcon] = useState(false);
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    setAnimateIcon(true);
    const iconTimeout = setTimeout(() => setAnimateIcon(false), 500);

    setAnimateText(true);
    const textTimeout = setTimeout(() => setAnimateText(false), 500);

    return () => {
      clearTimeout(iconTimeout);
      clearTimeout(textTimeout);
    };
  }, [game.currentPlayer]);

  const [isBlinking, setIsBlinking] = useState([false, false, false, false, false, false, false, false, false]);
  const [gameWinner, setGameWinner] = useState<number | null>(null);
  const [gameNewRound, setGameNewRound] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsBlinking(Array(9).fill(false)), 300);
  }, [isBlinking]);

  useEffect(() => {
    if (game.status.isComplete) {
      setGameWinner(game.status.winner?.id || 0);
      console.log(`gameWinner: ${gameWinner}`); // TODO: remove testlog
    } else {
      setTimeout(() => setGameWinner(null), 300);
    }
  }, [game.status.isComplete]);

  useEffect(() => {
    gameNewRound === true && setTimeout(() => setGameNewRound(false), 300);
  }, [gameNewRound]);

  // =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=

  function resetGame(isNewRound: boolean) {
    setState((prev: GameState) => {
      const stateClone = cloneDeep(prev);
      const { status, moves } = game;

      if (status.isComplete) {
        stateClone.history.currentRoundGames.push({
          moves,
          status,
        });
      }

      const filledSquares = moves.map((move) => move.squareId);
      const newBlinkingState = Array(9).fill(false);
      filledSquares.forEach( (id) => newBlinkingState[id - 1] = true );
      setIsBlinking(newBlinkingState)

      stateClone.currentGameMoves = [];

      if (isNewRound) {
        stateClone.history.allGames.push(...stateClone.history.currentRoundGames);
        stateClone.history.currentRoundGames = [];
        setGameNewRound(true)
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
      return stateClone;
    });
  }

  return (
    <>
      <main>
        <div className="flex flex-row justify-end mb-4 h-8"><ThemeToggle /></div>
        <div className="
          grid gap-5
          grid-cols-[80px_80px_80px]       grid-rows-[50px_80px_80px_80px_60px]
          md:grid-cols-[160px_160px_160px] md:grid-rows-[50px_160px_160px_160px_60px]
        ">
          <div className={classNames(
            "col-start-1 col-end-3 self-center flex items-center gap-5 md:text-lg",
            game.currentPlayer.colorClass
          )}>
            <div className={classNames({"animate-turnIconAnimation": animateIcon})}>
              {game.currentPlayer.id === 1 ? <FaX /> : <FaO />}
            </div>
            <p className={classNames({"animate-turnTextAnimation": animateText}, "font-medium dark:font-normal")}>
              {`Vez do ${game.currentPlayer.name}`}
            </p>
          </div>

          <Menu onAction={(action) => resetGame(action === "new-round")} />

          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((squareId) => {
            const existingMove = game.moves.find((move) => move.squareId === +squareId);

            return (
              <div
                key={squareId}
                className={classNames(
                  `
                    flex justify-center items-center
                    text-3xl md:text-5xl
                    rounded-lg
                    bg-black/5       hover:bg-black/[0.03]      active:bg-black/[0.01]
                    dark:bg-white/10 dark:hover:bg-white/[0.15] dark:active:bg-white/
                    transition-colors
                    hover:cursor-pointer hover:placeholder-opacity-90
                    shadow-md dark:shadow-lg shadow-black/30
                  `,
                  { '!bg-white/50 dark:!bg-white/30': isBlinking[squareId - 1] }
                )}
                onClick={() => {
                  if (existingMove) return;
                  handlePlayerMove(squareId, game.currentPlayer);
                }}
              >
                {existingMove && <div className={existingMove.player.colorClass}>{existingMove.player.id === 1 ? <FaX /> : <FaO />}</div>}
              </div>
            );
          })}

          <div className={classNames(
            `
              flex flex-col justify-center items-center
              rounded-lg
              shadow-md dark:shadow-lg shadow-black/30
              bg-player-x dark:bg-player-xDark
              transition-colors
            `,
            { '!bg-player-x/50 dark:!bg-player-xDark/50': gameWinner === 1 || gameNewRound }
          )}>
            <p className="text-xs md:text-sm font-bold">{stats.playerWithStats[0].name}</p>
            <span className="text-xs mt-0.5">{stats.playerWithStats[0].wins}</span>
          </div>
          <div className={classNames(
            `
              flex flex-col justify-center items-center
              rounded-lg
              shadow-md dark:shadow-lg shadow-black/30
              bg-surface-ties dark:bg-surface-tiesDark
              transition-colors
            `,
            { '!bg-surface-ties/50 dark:!bg-surface-tiesDark/50': gameWinner === 0 || gameNewRound }
          )}>
            <p className="text-xs md:text-sm font-bold">Empates</p>
            <span className="text-xs mt-0.5">{stats.ties}</span>
          </div>
          <div className={classNames(
            `
              flex flex-col justify-center items-center
              rounded-lg
              shadow-md dark:shadow-lg shadow-black/30
              bg-player-o dark:bg-player-oDark
              transition-colors
            `,
            { '!bg-player-o/50 dark:!bg-player-oDark/50': gameWinner === 2 || gameNewRound }
          )}>
            <p className="text-xs md:text-sm font-bold">{stats.playerWithStats[1].name}</p>
            <span className="text-xs mt-0.5">{stats.playerWithStats[1].wins}</span>
          </div>
        </div>
      </main>

      <Footer />

      {
        game.status.isComplete &&
        <Modal
          winnerBg={game.status.winner?.bgColorClass || "bg-surface-ties dark:bg-surface-tiesDark"}
          message={game.status.winner ? `${game.status.winner.name} venceu!` : "Empate!"}
          onClick={() => resetGame(false)}
        />
      }
    </>
  );
}
