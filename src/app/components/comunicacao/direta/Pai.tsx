import Filho from './Filho';

export default function Pai() {
  return (
    <div
      className={`
    flex gap-5
    bg-pink-400 text-purple-500 border border-white
    rounded-md p-5
    `}
    >
      <Filho />
      <Filho />
    </div>
  );
}
