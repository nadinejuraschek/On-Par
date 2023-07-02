import { FeatureCard } from "components";
import { notebookFeatures } from "data";
import styles from "./notebook.module.css";

export const Notebook = (): JSX.Element => (
  <div className={ styles.layout }>
    {
      notebookFeatures.map( ( feature, index ) => (
        <FeatureCard
          header={ feature.header }
          icon={ feature.icon }
          key={ index }
          link={ feature.link }
          title={ feature.title }
        />
      ) )
    }
  </div>
);
