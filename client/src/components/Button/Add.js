const Add = ({ handleClick }) => {
  return (
    <button className='circular ui icon button' onClick={handleClick}>
        <i className='plus icon'></i>
    </button>
  );
};

export default Add;