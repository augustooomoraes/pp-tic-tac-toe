import classNames from "classnames";

type Props = {
  winnerBg: string;
  message: string;
  onClick(): void;
};

export default function Modal({ message, onClick, winnerBg }: Props) {
  return (
    <div className="fixed left-0 top-0 z-20 w-full h-full flex justify-center items-center bg-black/60">
      <div className="w-full max-w-xs h-36 gap-4 rounded-lg surface-color-secondary flex flex-col justify-center items-center">
        <p>{message}</p>
        <button className={classNames("px-4 py-3 rounded-md hover:cursor-pointer hover:opacity-80", winnerBg)} onClick={onClick}>
          Jogar novamente!
        </button>
      </div>
    </div>
  );
}
