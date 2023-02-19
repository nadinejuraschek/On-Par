import styles from "./text.module.css";

export const Text = ({ as, children, className = "", color = "--grey_700", htmlFor = "", size = "xs", weight = "regular" }) => {
  const compiledClassName = `${ className } ${ styles.text } ${ styles[size] } ${ styles[weight] }`;
  const style = { color: `var(${ color })` };

  switch (as) {
  case "p":
    return <p className={ compiledClassName } style={ style }>{ children }</p>;
  case "h1":
    return <h1 className={ compiledClassName } style={ style }>{ children }</h1>;
  case "h2":
    return <h2 className={ compiledClassName } style={ style }>{ children }</h2>;
  case "h3":
    return <h3 className={ compiledClassName } style={ style }>{ children }</h3>;
  case "h4":
    return <h4 className={ compiledClassName } style={ style }>{ children }</h4>;
  case "h5":
    return <h5 className={ compiledClassName } style={ style }>{ children }</h5>;
  case "h6":
    return <h6 className={ compiledClassName } style={ style }>{ children }</h6>;
  case "label":
    return <label className={ compiledClassName } htmlFor={ htmlFor } style={ style }>{ children }</label>;
  case "span":
    return <span className={ compiledClassName } style={ style }>{ children }</span>
  default:
    return <div className={ compiledClassName } style={ style }>{ children }</div>;
  }
};
