import styles from "./loadingPlaceholder.module.css";

export const LoadingPlaceholder = (): JSX.Element => (
  <div className={ styles.placeholder }>
    <div className={ styles.animatedBackground } />
  </div>
);
