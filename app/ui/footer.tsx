export default function Footer() {
  return (
    <footer className="block mt-12 w-80 md:w-full">
      <p className="text-center">
        Projeto proposto por
        {" "}
        <a
          href="https://www.youtube.com/watch?v=MsnQ5uepIaE"
          target="_blank"
          className="
            bg-gradient-to-r from-surface-terciaryDark to-surface-terciaryDark
            active:from-surface-terciary active:to-surface-terciary"
        >
          <span className="
            text-surface-terciaryDark active:text-surface-terciary
            dark:font-normal font-semibold
          ">
            Zach Gollwitzer
          </span>
        </a>
        {" "}
        e descoberto através do
        {" "}
        <a
          href="https://www.freecodecamp.org/"
          target="_blank"
          className="
            bg-gradient-to-r from-surface-terciaryDark to-surface-terciaryDark
            active:from-surface-terciary active:to-surface-terciary"
        >
          <span className="
            text-surface-terciaryDark active:text-surface-terciary
            dark:font-normal font-semibold
          ">
            freeCodeCamp
          </span>
        </a>
        .
      </p>
      <p className="text-center">
        Acesse meu
        {" "}
        <a
          href="https://www.augustooomoraes.com/"
          target="_blank"
          className="
            bg-gradient-to-r from-surface-quaternaryDark to-surface-quaternaryDark
            active:from-surface-quaternary active:to-surface-quaternary"
        >
          <span className="
            text-surface-quaternaryDark active:text-surface-quaternary
            dark:font-normal font-semibold
          ">
            portfólio
          </span>
        </a>
        .
      </p>
    </footer>
  );
}
