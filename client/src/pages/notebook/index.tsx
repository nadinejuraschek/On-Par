import { FeatureCard, Text } from "components";

import { notebookFeatures } from "data";
import styles from "./notebook.module.css";

export const Notebook = (): JSX.Element => (
  <div className={ styles.layout }>
    <Text as="h2" className={ styles.header } size="xl" weight="bold">Notebook</Text>
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
