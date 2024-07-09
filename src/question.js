function Question({ ques, dispatch, answer }) {
  //console.log(ques);
  const hasAnswered = answer !== null;
  return (
    <div>
      <h4>{ques.question}</h4>
      <div className="options">
        {ques.options.map((opt, index) => (
          <button
            className={`btn btn-option ${index === answer ? "answer" : ""} ${
              hasAnswered
                ? index === ques.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
            disabled={hasAnswered}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
export default Question;
