import styles from "./loading.module.css";

export const Loading = (): JSX.Element => (
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
