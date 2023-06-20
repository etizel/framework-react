export default function Box(props: any) {
  return (
    <div
      className={`
      flex justify-center items-center
      bg-yellow-500 rounded-md p-2
      w-64 h-64 m-2 text-2xl font-thin
    `}
    >
      {props.children}
    </div>
  );
}
