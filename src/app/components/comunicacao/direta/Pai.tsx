import Filho from './Filho';

interface PaiProps {
  nome: string;
  sobrenome: string;
}

export default function Pai(props: PaiProps) {
  return (
    <div
      className={`
    flex flex-col gap-5
    bg-pink-400 text-black-500 border border-white
    rounded-md p-5
    `}
    >
      <div className="flex justify-center gap-2 text-xl">
        <span className="font-bold">Pai</span>
        <span>{props.nome}</span>
        <span>{props.sobrenome}</span>
      </div>
      <div className="flex gap-5">
        <Filho nome="Tranks" sobrenome={props.sobrenome} />
        <Filho nome="Pan" sobrenome={props.sobrenome} />
      </div>
    </div>
  );
}
