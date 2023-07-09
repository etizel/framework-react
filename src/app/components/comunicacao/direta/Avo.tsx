import Pai from './Pai';

export default function Avo() {
  return (
    <div
      className={`
    flex gap-5 p-5
    bg-purple-500 border border-white rounded-md
    `}
    >
      <Pai />
      <Pai />
      <Pai />
    </div>
  );
}
