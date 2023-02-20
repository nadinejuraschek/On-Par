import { Card } from "components";
import styles from "./features.module.css";

export const FeatureCard = ( { header, icon, link, title } ) => (
  <a href={ link }>
    <Card className={ styles.container } withHover>
      <img src={ icon } className={ styles.icon } alt={ title } />
      <p className={ styles.title }>{ header }</p>
    </Card>
  </a>
);
