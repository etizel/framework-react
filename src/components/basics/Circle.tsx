interface CircleProps {
  texto: string;
  quaseQuadrada?: boolean;
}
export default function Circle(props: CircleProps) {
  return (
    <div
      className={`
        flex justify-center items-center
        bg-pink-500 h-64 w-64 m-4 text-black
        ${props.quaseQuadrada ? 'rounded-md' : 'rounded-full'}
         
      `}
    >
      {props.texto}
    </div>
  );
}
