"use client";

import { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

type Props = {
  onAction(action: "reset" | "new-round"): void;
};

export default function Menu({ onAction }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        className="
          flex justify-center md:justify-around items-center gap-1.5 md:gap-0
          w-full h-full
          cursor-pointer
          rounded-xl
          text-sm md:text-base
          bg-surface-menuButton            dark:bg-surface-menuButtonDark
          hover:bg-surface-menuButtonHover hover:dark:bg-surface-menuButtonHoverDark
          transition-colors
        "
        onClick={() => {
          setMenuOpen((prev) => !prev);
        }}
      >
        Ações
        {menuOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>

      {menuOpen && (
        <div className="
          absolute
          top-14 right-0 z-10
          rounded-xl p-2.5
          bg-surface-menuButton dark:bg-surface-menuButtonDark
        ">
          <button
            className="
              w-full p-2
              text-left
              rounded
              hover:cursor-pointer active:cursor-pointer
              bg-transparent
              hover:bg-surface-menuButtonHover          active:bg-surface-menuButtonActive
              hover:dark:bg-surface-menuButtonHoverDark dark:active:bg-surface-menuButtonActiveDark
              transition-colors
            "
            onClick={() => {
              onAction("reset");
              setMenuOpen(false);
            }}
          >
            Reiniciar
          </button>
          <button
            className="
              w-full p-2
              text-left
              rounded
              hover:cursor-pointer active:cursor-pointer
              bg-transparent
              hover:bg-surface-menuButtonHover          active:bg-surface-menuButtonActive
              hover:dark:bg-surface-menuButtonHoverDark dark:active:bg-surface-menuButtonActiveDark
            "
            onClick={() => {
              onAction("new-round");
              setMenuOpen(false);
            }}
          >
            Nova Rodada
          </button>
        </div>
      )}
    </div>
  );
}
