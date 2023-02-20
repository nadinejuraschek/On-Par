import { Button, Text } from "components";

import styles from "./landing.module.css";

export const Landing = () => {
  return (
    <main className={ styles.flexCentered }>
      <section className={ styles.section } style={ { backgroundColor: "var(--primary_50)" } }>
        <Text as="h1" className={ styles.title } size="lg"><span className={ styles.brand }>On Par</span>|<span>The Au Pair&apos;s Assistant</span></Text>
        <Text as="h2" className={ styles.subtitle } size="xl" weight="bold">Because taking care of kids is hard enough.</Text>
        <Button link="/home" variant="primary">
          Get Started
          <i className="right arrow icon"></i>
        </Button>
      </section>
      <section className={ styles.section } style={ { backgroundColor: "var(--secondary_50)" } }></section>
      <section className={ styles.section } style={ { backgroundColor: "var(--tertiary_50)" } }></section>
    </main>
  );
};
