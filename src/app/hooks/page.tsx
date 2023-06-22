import RandomImage from './RandomImage';

export default function PageImage() {
  return (
    <div
      className={`
    flex justify-center items-center h-screen gap-5
    `}
    >
      <RandomImage />
      <RandomImage />
      <RandomImage />
    </div>
  );
}
