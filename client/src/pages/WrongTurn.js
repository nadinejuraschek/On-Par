const WrongTurn = () => {
  return (
    <main>
      <h2>You took a wrong turn!</h2>
      <p>
        <a href="/home">
          <i className="arrow left icon"></i>
          Go Back
        </a>
      </p>
    </main>
  );
};

export default WrongTurn;
