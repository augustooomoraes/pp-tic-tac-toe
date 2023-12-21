"use client";

import classNames from "classnames";
import Footer from "./ui/footer";
import Menu from "./ui/menu";
import Modal from "./ui/modal";
import { GameState, Player } from "./types";
// import { useLocalStorage } from "./useLocalStorage";
import { useState } from "react";
import { derivedGame, derivedStats } from "./utils";
import { FaX, FaO } from "react-icons/fa6";

/**
 * Falta:
 * 1. OK: arrumar as classes neste arquivo;
 * 2. OK: criar o entreypoint.tsx – na verdade, criar o que o valha; acho que vai ser diferente.
 *
 * Com isso, acho que deu. Não cheguei a repassar o funcionamento disso tudo mas, se estiver funcionando, maravilha.
 * Aliás: há funcionalidades para pôr aqui:
 * 1.     toggle dark/light mode;
 * 2.     contagens de sei lá o quê (ver o final do vídeo tutorial)
 *
 *    Este projeto será o primeiro a ser adicionado no augustooomoraes.github.io;
 *    OK: este domínio, portanto, terá que ser criado logo logo.
 *
 * Quero testar também a OpenGraph Image sem inserção manual de metadados relativos a isso, pois suspeito que o problema que deu com o augustooomoraes.com no LinkedIn foi de atualização; bastava esperar um pouco e, sem os metadados manuais, tudo funcionaria. Se for esse o caso, tirarei aqueles metadados de lá.
 *
 * Convém, acho, arrumar o README daquele projeto e deixar o repositório público.
 * O deste daqui será público, também. E preciso arrumar o README dele. No repositório do augustooomoraes.github.io este projeto será simplesmente repostado, numa rota seguinte à primeira que, a princípio, conterá links para todos os projetos que serão nela publicados.
 *
 */

export default function Home() {
  // =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x
  // https://dev.to/collegewap/how-to-use-local-storage-in-nextjs-2l2j
  const useLocalStorage = (key, initialValue) => {
    const [state, setState] = useState(() => {
      try {
        const value = window.localStorage.getItem(key);
        return value ? JSON.parse(value) : initialValue;
      } catch (error) {
        console.log(error);
      }
    });

    const setValue = (value) => {
      try {
        const valueToStore = value instanceof Function ? value(state) : value;
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
        setState(value);
      } catch (error) {
        console.log(error);
      }
    };

    return [state, setValue];
  };
  // =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x

  const [state, setState] = useLocalStorage<GameState>("game-state-key", {
    currentGameMoves: [],
    history: {
      currentRoundGames: [],
      allGames: [],
    },
  });

  const game = derivedGame(state);
  const stats = derivedStats(state);

  function resetGame(isNewRound: boolean) {
    // Menu.tsx → setMenuOpen((prev) => false)}
    // Não sei como se deve controlar um state de outro arquivo. Exportar de lá? ...
    setState((prev) => {
      const stateClone = structuredClone(prev);
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
    setState((prev) => {
      const stateClone = structuredClone(prev);

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
    <body>
      <main>
        {/* <div className="grid grid-cols-[repeat(3,_80px)] grid-rows-[50px_repeat(3,_80px)_60px] gap-5"> */}
        <div className="grid grid-cols-[80px_80px_80px] grid-rows-[50px_80px_80px_80px_60px] gap-5">
          <div className={classNames("col-start-1 col-end-3 self-center flex items-center gap-5", game.currentPlayer.colorClass)}>
            {/* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x */}
            {/* <i className={classNames("animate-turnIconAnimation", "fa-solid", game.currentPlayer.iconClass, game.currentPlayer.colorClass)}></i> */}
            {/* ↓ Acho que isso funcionará. */}
            <div className={classNames("animate-turnIconAnimation", game.currentPlayer.colorClass)}>{(game.currentPlayer.id = 1 ? <FaX /> : <FaO />)} </div>
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
                  if (existingMove) return;

                  handlePlayerMove(squareId, game.currentPlayer);
                }}
              >
                {/* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */}
                {/* Não sei se é preciso adicionar mais classes aqui. */}
                {/* {existingMove && <i className={classNames("fa-solid", existingMove.player.iconClass, existingMove.player.colorClass)}></i>} */}
                {/* ↓ Acho que isso funcionará. */}
                {existingMove && <div className={existingMove.player.colorClass}>{(existingMove.player.id = 1 ? <FaX /> : <FaO />)}</div>}
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

      {game.status.isComplete && <Modal message={game.status.winner ? `${game.status.winner.name} venceu!` : "Empate!"} onClick={() => resetGame(false)} />}
    </body>
  );
}
