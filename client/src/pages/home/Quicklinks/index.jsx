import { Button, Text } from "components";

import emergencyphone from "images/emergency-call.svg";
import styles from "./quicklinks.module.css";

export const Quicklinks = () => {
  return (
    <div className={ styles.container }>
      <Text as="h3" size="lg" weight="bold">Quicklinks</Text>
      <Button align="alignStart" link="/emergencynumbers" variant="tertiary"><div className={ styles.helpIcon }>
        <img src={ emergencyphone } alt="Emergency Numbers" />
      </div>
        Emergency Numbers</Button>
    </div>
  )
};
