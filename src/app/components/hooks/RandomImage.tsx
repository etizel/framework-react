'use client';
import Image from 'next/image';
import { useState } from 'react';
export default function RandomImage() {
  const url = 'https://source.unsplash.com/featured/400x400?';
  var pesquisa: string = '';

  function finalUrl() {
    return `${url}${pesquisa}`;
  }

  function RandomBtn(value: string) {
    const [pesquisa, alterarPesquisa] = useState<string>('abstract');

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
      <Image src={finalUrl()} height={400} width={400} alt="Imagem" />
      <div className="flex justify-between gap-5 ">
        {RandomBtn('abstract')}
        {RandomBtn('city')}
        {RandomBtn('person')}
      </div>
    </div>
  );
}
