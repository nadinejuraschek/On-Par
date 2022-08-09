// STYLES
import styles from './input.module.css';

const Input = ({ name, value, handleChange, icon, label }) => {
  return (
    <div className={`${styles.field} ${styles.stacked}`}>
      <label className={styles.label} htmlFor={name}>
        {
          icon
          ?
          <i class={`${icon} icon`}></i>
          :
          null
        }
        {label}:
      </label>
      <input
        className={styles.input}
        type='text'
        name={name}
        placeholder={value}
        value={value}
        onChange={event => handleChange(event.target.value)}
      />
    </div>
  );
};

export default Input;