import Circle from '@/components/basics/Circle';

export default function Home() {
  return (
    <div className="flex h-screen justify-between items-center">
      <Circle texto="Circle #1" />
      <Circle texto="Circle #2" />
      <Circle texto="Circle #3" />
      <Circle texto="Circle #4" />
    </div>
  );
}
