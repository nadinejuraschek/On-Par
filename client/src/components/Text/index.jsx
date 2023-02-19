import styles from "./text.module.css";

export const Text = ({ as, children, color = "--grey_700", htmlFor = "", size = "xs", weight = "regular" }) => {
  const className = `${ styles.text } ${ styles[size] } ${ styles[weight] }`;
  const style = { color: `var(${ color })` };

  switch (as) {
  case "p":
    return <p className={ className } style={ style }>{ children }</p>;
  case "h1":
    return <h1 className={ className } style={ style }>{ children }</h1>;
  case "h2":
    return <h2 className={ className } style={ style }>{ children }</h2>;
  case "h3":
    return <h3 className={ className } style={ style }>{ children }</h3>;
  case "h4":
    return <h4 className={ className } style={ style }>{ children }</h4>;
  case "h5":
    return <h5 className={ className } style={ style }>{ children }</h5>;
  case "h6":
    return <h6 className={ className } style={ style }>{ children }</h6>;
  case "label":
    return <label className={ className } htmlFor={ htmlFor } style={ style }>{ children }</label>;
  case "span":
    return <span className={ className } style={ style }>{ children }</span>
  default:
    return <div className={ className } style={ style }>{ children }</div>;
  }
};
