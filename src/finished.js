function Finished({ points, maxPossible, dispatch }) {
  const percentage = (points / maxPossible) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPossible} (
        {Math.ceil(percentage)})%
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default Finished;
