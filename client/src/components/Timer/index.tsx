import { useMemo } from "react";
import { TimeUtils } from "utils";
import { Container } from "./styled";
import { ITimer } from "./types";
import { ProgressRing } from "../ProgressRing";

export const Timer = ( { time }: ITimer ): JSX.Element => {
  const hours = TimeUtils.minToH( time );

  const progress = useMemo(() => {
    const percentage = ( 100 / 600 ) * time;
    return percentage <= 100 ? percentage : 100;
  }, [time]);

  return (
    <Container>
      <ProgressRing radius={ 65 } stroke={ 4 } progress={ progress } label={ hours } />
    </Container>
  );
};
