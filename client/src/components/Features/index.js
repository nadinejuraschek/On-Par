import styles from "./features.module.css";

const FeatureCard = ( { link, icon, title, header } ) => {
  return (
    <a className={ styles.container } href={ link }>
      <img src={ icon } className={ styles.icon } alt={ title } />
      <p className={ styles.title }>{ header }</p>
    </a>
  );
};

export default FeatureCard;
