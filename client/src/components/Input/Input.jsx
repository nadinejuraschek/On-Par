import styles from "./input.module.css";

export const Input = ( { name, value, handleChange, icon, label } ) => (
  <div className={ `${ styles.field } ${ styles.stacked }` }>
    <label className={ styles.label } htmlFor={ name }>
      { icon && <i className={ `${ icon } icon` }></i> }
      { label }:
    </label>
    <input
      className={ styles.input }
      type="text"
      name={ name }
      placeholder={ value }
      value={ value }
      onChange={ event => handleChange( event.target.value ) }
    />
  </div>
);
