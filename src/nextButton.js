export default function NextButton({ dispatch, answer, index, num }) {
  if (answer === null) return;
  if (index < num - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next Question
      </button>
    );
  if (index === num - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finished" })}
      >
        Finish
      </button>
    );
}
