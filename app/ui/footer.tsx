export default function Footer() {
  return (
    <footer className="block mt-12 w-80 md:w-full">
      <p className="text-center">
        Projeto proposto por{" "}
        <a href="https://www.youtube.com/watch?v=MsnQ5uepIaE" target="_blank" className="bg-gradient-to-r from-terciary-dark to-terciary-dark active:from-terciary active:to-terciary">
          <span className="text-terciary-dark active:text-terciary dark:font-normal font-semibold">Zach Gollwitzer</span>
        </a>{" "}
        e descoberto através do{" "}
        <a href="https://www.freecodecamp.org/" target="_blank" className="bg-gradient-to-r from-terciary-dark to-terciary-dark active:from-terciary active:to-terciary">
          <span className="text-terciary-dark active:text-terciary dark:font-normal font-semibold">freeCodeCamp</span>
        </a>
        .
      </p>
      <p className="text-center">
        Acesse meu{" "}
        <a href="https://www.augustooomoraes.com/" target="_blank" className="bg-gradient-to-r from-quaternary-dark to-quaternary-dark active:from-quaternary active:to-quaternary">
          <span className="text-quaternary-dark active:text-quaternary dark:font-normal font-semibold">portfólio</span>
        </a>
        .
      </p>
    </footer>
  );
}
