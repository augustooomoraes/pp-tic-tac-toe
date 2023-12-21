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
      <button className={classNames("w-full h-full cursor-pointer flex justify-around items-center rounded-xl surface-color-secondary", menuOpen ? "border-custom" : "")} onClick={() => setMenuOpen((prev) => !prev)}>
        Ações
        {menuOpen ? <FaChevronUp /> : <FaChevronDown />}
        {/* <i
          className={classNames(
            "fa-solid",
            menuOpen ? "fa-chevron-up" : "fa-chevron-down"
          )}
        ></i> */}
      </button>

      {menuOpen && (
        <div className="absolute top-16 right-0 z-10 rounded-0.5 p-2.5 surface-color-secondary border-custom">
          <button className="w-full text-left rounded p-2 bg-transparent hover:cursor-pointer hover:bg-white/10 active:cursor-pointer active:bg-white/[.15]" onClick={() => onAction("reset")}>
            Reiniciar
          </button>
          <button className="w-full text-left rounded p-2 bg-transparent hover:cursor-pointer hover:bg-white/10 active:cursor-pointer active:bg-white/[.15]" onClick={() => onAction("new-round")}>
            Nova Rodada
          </button>
        </div>
      )}
    </div>
  );
}
