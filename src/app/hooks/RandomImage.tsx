'use client';
import Image from 'next/image';
export default function RandomImage() {
  const url = 'https://source.unsplash.com/featured/300x300?';
  var pesquisa: string = '';

  function finalUrl() {
    return `${url}${pesquisa}`;
  }

  function RandomBtn(value: string) {
    return (
      <button
        className={`
        bg-pink-500 px-4 py-2 rounded-md
      `}
        onClick={() => {
          pesquisa = value;
          console.log(finalUrl());
        }}
      >
        {value}
      </button>
    );
  }

  return (
    <div className="flex flex-col gap-3 border border-zinc-500 p-7 rounded-md">
      <Image src={finalUrl()} height={300} width={300} alt="Imagem" />
      <div className="flex gap-5">
        {RandomBtn('abstract')}
        {RandomBtn('city')}
        {RandomBtn('person')}
      </div>
    </div>
  );
}
