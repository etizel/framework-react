export default function RandomImage() {
  function RandomBtn() {
    return (
      <button
        className={`
        bg-pink-500 gap-5
      `}
      >
        teste
      </button>
    );
  }

  return (
    <div>
      {RandomBtn()}
      {RandomBtn()}
      {RandomBtn()}
    </div>
  );
}
