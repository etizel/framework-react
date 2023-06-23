export default function RandomImage() {
  function RandomBtn() {
    return (
      <button
        className={`
        bg-pink-500 px-4 py-2 rounded-md
      `}
      >
        teste
      </button>
    );
  }

  return <div>{RandomBtn()}</div>;
}
