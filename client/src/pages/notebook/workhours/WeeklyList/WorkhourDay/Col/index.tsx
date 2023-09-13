import { Text } from "components";
import { Col } from "./styled";
import { IWeekhourDayCol } from "./types";

export const WeekhourDayCol = ({
  align = "start",
  border = false,
  color = "--grey_700",
  label,
  value,
  weight = "regular",
  withPadding = false,
}: IWeekhourDayCol ): JSX.Element => {
  return (
    <Col $align={align} $border={border} $withPadding={withPadding}>
      <Text color="--grey_400" size="sm">
        {label}
      </Text>
      <Text color={color} size="sm" weight={weight}>
        { value }
      </Text>
    </Col>
  );
}