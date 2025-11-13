import { useMemo } from "react";
import { Payment } from "./Payment";
import { List } from "./styled";
import { IPaymentList } from "./types";

export const PaymentList = ({ entries }: IPaymentList): JSX.Element => {
  const renderEntries = useMemo(() => {
    return entries.map( payment => (
      <Payment
        key={ payment._id }
        payment={ payment }
      />
    ));
  }, [entries]);

  return (
    <List>
      {renderEntries}
    </List>
  );
}