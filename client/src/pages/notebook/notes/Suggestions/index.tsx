import { Card, Text } from "components";

import styles from "./suggestions.module.css";

export const Suggestions = (): JSX.Element => (
  <Card className={ styles.ideas }>
    <Text as="h4" size="md" weight="bold">A Space for You to Write Down Your Thoughts</Text>
    <div>
      <Text as="h5" size="sm" weight="bold">Ideas:</Text>
      <div className="ui list">
        <div className="item">I am homesick. I miss ...</div>
        <div className="item">
          I discovered a new favorite food / place / hobby of mine
        </div>
        <div className="item">
          Things my host kids said to me today
        </div>
      </div>
    </div>
  </Card>
);