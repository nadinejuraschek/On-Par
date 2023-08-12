import { useMemo, useState } from "react";
import { Payment } from "./Payment";
import { List } from "./styled";
import { IPaymentList } from "./types";
import { EditPaymentModal } from "../EditPaymentModal";

export const PaymentList = ({ entries }: IPaymentList): JSX.Element => {
  const [editPayment, setEditPayment] = useState(null);

  const renderEntries = useMemo(() => {
    return entries.map( payment => (
      <Payment
        handleEdit={() => setEditPayment(payment)}
        key={ payment._id }
        payment={ payment }
      />
    ));
  }, [entries]);

  const renderEditModal = useMemo(() => {
    if (!editPayment) return null;

    return <EditPaymentModal handleClose={() => setEditPayment(null)} originalPayment={editPayment} />;
  }, [editPayment]);

  return (
    <>
      <List>
        {renderEntries}
      </List>
      {renderEditModal}
    </>
  );
}