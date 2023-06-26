import RandomImage from '../components/hooks/RandomImage';

export default function ImagePage() {
  return (
    <div
      className={`
    flex justify-center gap-5 h-screen items-center
    `}
    >
      <RandomImage />
      <RandomImage />
      <RandomImage />
    </div>
  );
}
