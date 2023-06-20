import Home from '@/app/page';
export default function Circle(props: any) {
  return (
    <div
      className={`
        flex justify-center items-center
        bg-pink-500 h-64 w-64 m-4 
        rounded-full text-black
      `}
    >
      {props.texto}
    </div>
  );
}
