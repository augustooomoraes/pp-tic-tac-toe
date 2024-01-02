"use client";

import classNames from "classnames";
import Footer from "./ui/footer";
import Menu from "./ui/menu";
import Modal from "./ui/modal";
import { GameState, Player } from "./types";
import { deriveGame, deriveStats } from "./utils";
import { FaX, FaO, FaMoon, FaSun } from "react-icons/fa6";
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

  /** TOGGLE LIGHT/DARK MODE TO DO:
   * uncomment tailwind.config.ts line 6
   * uncomment useLocalStorage constants below
   * uncomment toggleTheme function below
   * maybe uncomment main element class
   * fix and uncomment toggle function button above footer element
   * https://egghead.io/blog/tailwindcss-dark-mode-nextjs-typography-prose
   * there are other opened links, but this seems more promising → Next.js ThemeProvider
   */

  // Committing again for staging.

  // const [darkTheme, setDarkTheme] = useLocalStorage<boolean>("dark-theme-key", window.matchMedia("(prefers-color-scheme: dark)").matches ? true : false);

  const game = deriveGame(state);
  const stats = deriveStats(state);

  // function toggleTheme() {
  //   setDarkTheme((prev: boolean) => {
  //     let darkThemeClone = cloneDeep(prev);
  //     darkThemeClone ? (darkThemeClone = false) : (darkThemeClone = true);

  //     return darkThemeClone;
  //   });
  // }

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
      return stateClone;
    });
  }

  {
    /* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x
    x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */
  }

  return (
    <>
      <main
      // className={JSON.parse(localStorage.getItem("dark-theme-key")) ? "dark" : ""}
      >
        <div className="grid grid-cols-[80px_80px_80px] grid-rows-[50px_80px_80px_80px_60px] gap-5 md:grid-cols-[160px_160px_160px] md:grid-rows-[50px_160px_160px_160px_60px]">
          <div className={classNames("col-start-1 col-end-3 self-center flex items-center gap-5 md:text-lg", game.currentPlayer.colorClass)}>
            <div className={classNames("animate-turnIconAnimation")}>{game.currentPlayer.id === 1 ? <FaX /> : <FaO />} </div>
            <p className="animate-turnTextAnimation font-medium dark:font-normal">{`Vez do ${game.currentPlayer.name}`}</p>
          </div>

          <Menu onAction={(action) => resetGame(action === "new-round")} />

          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((squareId) => {
            const existingMove = game.moves.find((move) => move.squareId === +squareId);

            return (
              <div
                key={squareId}
                className="flex justify-center items-center text-3xl md:text-5xl rounded-lg bg-black/5 hover:bg-black/[0.03] active:bg-black/[0.01] dark:bg-white/10 dark:hover:bg-white/[0.15] dark:active:bg-white/20 hover:cursor-pointer hover:placeholder-opacity-90 shadow-lg shadow-black/30"
                onClick={() => {
                  if (existingMove) {
                    return;
                  }

                  handlePlayerMove(squareId, game.currentPlayer);
                }}
              >
                {existingMove && <div className={existingMove.player.colorClass}>{existingMove.player.id === 1 ? <FaX /> : <FaO />}</div>}
              </div>
            );
          })}

          <div className="flex flex-col justify-center items-center rounded-lg shadow-lg shadow-black/30 bg-terciary dark:bg-terciary-dark">
            <p className="text-xs md:text-sm font-bold">{stats.playerWithStats[0].name}</p>
            <span className="text-xs mt-0.5">{stats.playerWithStats[0].wins}</span>
          </div>
          <div className="flex flex-col justify-center items-center rounded-lg shadow-lg shadow-black/30 bg-ties dark:bg-ties-darker">
            <p className="text-xs md:text-sm font-bold">Empates</p>
            <span className="text-xs mt-0.5">{stats.ties}</span>
          </div>
          <div className="flex flex-col justify-center items-center rounded-lg shadow-lg shadow-black/30 bg-quaternary dark:bg-quaternary-dark">
            <p className="text-xs md:text-sm font-bold">{stats.playerWithStats[1].name}</p>
            <span className="text-xs mt-0.5">{stats.playerWithStats[1].wins}</span>
          </div>
        </div>
      </main>

      {/* <div className="">
        <button onClick={toggleTheme}>{JSON.parse(localStorage.getItem("dark-theme-key")) ? <FaSun /> : <FaMoon />}</button>
      </div> */}

      <Footer />

      {game.status.isComplete && <Modal winnerBg={game.status.winner?.bgColorClass || "bg-ties-dark dark:bg-ties-darkest"} message={game.status.winner ? `${game.status.winner.name} venceu!` : "Empate!"} onClick={() => resetGame(false)} />}
    </>
  );
}
