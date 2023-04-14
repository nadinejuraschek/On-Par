import styles from "./loadingSpinner.module.css";

export const LoadingSpinner = (): JSX.Element => (
  <div className={ styles.container }>
    <div className={ styles.spinner }>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);
