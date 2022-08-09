const Close = ({ handleClick }) => {
  return (
    <button className='circular ui icon button' onClick={handleClick}>
        <i className='close icon'></i>
    </button>
  );
};

export default Close;