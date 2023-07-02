import { Resources as ResourcesList, Text } from "components";

import styles from "./resources.module.css";

export const Resources = (): JSX.Element => (
  <div className={ styles.layout }>
    <Text as="h2" size="xl" weight="bold">Resources</Text>
    <ResourcesList />
  </div>
);
