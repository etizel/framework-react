import RandomImage from '../components/hooks/RandomImage';

export default function ImagePage() {
  return (
    <div
      className={`
    flex justify-center gap-5
    `}
    >
      <RandomImage />
      <RandomImage />
      <RandomImage />
    </div>
  );
}
