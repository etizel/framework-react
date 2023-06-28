'use client';
import Image from 'next/image';
import { useState } from 'react';
export default function RandomImage() {
  const [pesquisa, alterarPesquisa] = useState<string>('abstract');
  const [tamanho, alterarTamanho] = useState<number>(400);
  const url = 'https://source.unsplash.com/featured/';

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
          alterarPesquisa(value);
          console.log(value);
        }}
      >
        {value}
      </button>
    );
  }

  return (
    <div className="flex flex-col gap-3 border border-zinc-500 p-7 rounded-md">
      <Image
        src={`${url}${tamanho}x${tamanho}?${pesquisa}`}
        height={400}
        width={400}
        alt="Imagem"
      />
      <div className="flex justify-between gap-5 ">
        {RandomBtn('abstract')}
        {RandomBtn('city')}
        {RandomBtn('person')}
      </div>
      <div>
        <input
          type="number"
          value={tamanho}
          className="bg-zinc-800 p-2 rounded-md outline-none"
          onChange={(e) => {
            console.log(alterarTamanho(EventTarget));
          }}
        />
      </div>
    </div>
  );
}
