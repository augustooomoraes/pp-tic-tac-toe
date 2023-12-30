"use client";

import { useState } from "react";
import classNames from "classnames";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

type Props = {
  onAction(action: "reset" | "new-round"): void;
};

export default function Menu({ onAction }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className={classNames("w-full h-full cursor-pointer flex justify-around items-center rounded-xl text-sm md:text-base bg-secondary dark:bg-secondary-dark", menuOpen ? "border-custom" : "")}
        onClick={() => {
          setMenuOpen((prev) => !prev);
          // =x=x=x=x=x=x=x=x=x=x=x
          // =x=x Teste - Next =x=x
          console.log(`Menu clicked.`);
        }}
      >
        Ações
        {menuOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>

      {menuOpen && (
        <div className="absolute top-16 right-0 z-10 rounded-0.5 p-2.5 border-custom bg-secondary dark:bg-secondary-dark">
          <button
            className="w-full text-left rounded p-2 bg-transparent hover:cursor-pointer hover:bg-black/5 active:bg-black/10 dark:hover:bg-white/10 dark:active:bg-white/[.15] active:cursor-pointer"
            onClick={() => {
              onAction("reset");
            }}
          >
            Reiniciar
          </button>
          <button
            className="w-full text-left rounded p-2 bg-transparent hover:cursor-pointer hover:bg-black/5 active:bg-black/10 dark:hover:bg-white/10 dark:active:bg-white/[.15] active:cursor-pointer"
            onClick={() => {
              onAction("new-round");
            }}
          >
            Nova Rodada
          </button>
        </div>
      )}
    </div>
  );
}
