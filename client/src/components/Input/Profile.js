import styles from "./input.module.css";

const ProfileInput = ( { name, value, handleChange, edit, icon, label } ) => (
  <div className={ styles.field }>
    <label className={ styles.label } htmlFor={ name }>
      { icon && <i className={ `${ icon } icon` }></i> }
      { label }:
    </label>
    <p className={ edit === true ? styles.hide : "" }>{ value }</p>
    <input
      className={ edit === true ? styles.profileInput : styles.hide }
      type="text"
      name={ name }
      placeholder={ value }
      value={ value }
      onChange={ event => handleChange( event.target.value ) }
    />
  </div>
);

export default ProfileInput;
