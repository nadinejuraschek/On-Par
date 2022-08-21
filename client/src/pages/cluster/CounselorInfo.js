import blankPic from "images/blankProfile.svg";

const CounselorInfo = () => {
  return (
    <div className="ui card">
      <div className="content">
        <img
          className="right floated mini ui avatar image"
          src={ blankPic }
          alt="counselor"
        />
        <div className="header">Counselor Name</div>
        <div className="meta">Local Community Counselor</div>
        <div className="description">
          <p>
            <i className="envelope square icon"></i>
            example@mail.com
          </p>
          <p>
            <i className="phone square icon"></i>
            +1 (222) 333-4444
          </p>
          <p>
            <i className="info circle icon"></i>
            Can be reached 8 AM - 7 PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default CounselorInfo;
