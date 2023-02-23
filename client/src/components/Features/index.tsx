import { Card } from "components";
import { IFeatureCard } from "./types";
import styles from "./features.module.css";

export const FeatureCard = ( { header, icon, link, title }: IFeatureCard ): JSX.Element => (
  <a href={ link }>
    <Card className={ styles.container } withHover>
      {/* @ts-ignore-next-line */}
      <img src={ icon } className={ styles.icon } alt={ title } />
      <p className={ styles.title }>{ header }</p>
    </Card>
  </a>
);
