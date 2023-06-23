'use client';
export default function RandomImage() {
  const url = 'https://source.unsplash.com/featured/300x300?';

  function RandomBtn(value: string) {
    let pesquisa: string = '';

    return (
      <button
        className={`
        bg-pink-500 px-4 py-2 rounded-md
      `}
        onClick={() => (pesquisa = value)}
      >
        {value}
      </button>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {RandomBtn('person')}
      {RandomBtn('city')}
      {RandomBtn('abstract')}
    </div>
  );
}
