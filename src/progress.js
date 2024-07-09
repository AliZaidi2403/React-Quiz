function Progress({ index, numQues, points, max }) {
  return (
    <header className="progress">
      <progress max={numQues} value={index + 1} />
      <p>
        Question <strong>{index + 1}</strong>/{numQues}
      </p>
      <p>
        <strong>{points}</strong>/{max}
      </p>
    </header>
  );
}

export default Progress;
