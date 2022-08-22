import blankPic from "images/blankProfile.svg";

export const AuPairInfo = () => (
  <div className="item">
    <img className="ui avatar image" src={ blankPic } alt="aupair" />
    <div className="content">
      <p className="header">Friend Name</p>
      <p className="description">
        <span>Home Country: </span>
        <br />
        <span>
          <i className="envelope square icon"></i>
          example@mail.com
        </span>
      </p>
    </div>
  </div>
);
