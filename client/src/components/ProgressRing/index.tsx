import { Container, Label, Progress } from "./styled";

import { IProgressRing } from "./types";

export const ProgressRing = ({ className = "", label, progress, radius, stroke }: IProgressRing): JSX.Element => {
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  const labelSize = radius * 2;

  return (
    <Container className={className}>
      <svg height={ radius * 2 } width={ radius * 2 }>
        <circle
          stroke="#f1f1f1"
          fill="transparent"
          strokeWidth={ stroke }
          r={ normalizedRadius }
          cx={ radius }
          cy={ radius }
        />
        <Progress
          stroke="var(--secondary_500)"
          fill="transparent"
          strokeWidth={ stroke }
          strokeDasharray={ circumference + " " + circumference }
          style={ { strokeDashoffset } }
          r={ normalizedRadius }
          cx={ radius }
          cy={ radius }
        />
      </svg>
      <Label style={ { height: labelSize, width: labelSize } }>
        { label }
      </Label>
    </Container>
  );
};
