import blankPic from "assets/blankProfile.svg";

export const AuPairInfo = (): JSX.Element => (
  <div className="item">
    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
    {/* @ts-ignore-next-line */}
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
