import { Schema, model } from 'mongoose';

interface IPaymentSchema {
  amount: number | null;
  date: Date,
  late: boolean,
  paid: boolean,
  week: number;
}

// SCHEMA SETUP
const paymentSchema = new Schema<IPaymentSchema>({
  amount: { type: Number, required: false, default: null },
  date: { type: Date, required: false, default: null },
  late: { type: Boolean, required: true, default: false },
  paid: { type: Boolean, required: true, default: false },
  week: { type: Number, required: true },
});

export default model<IPaymentSchema>('Payment', paymentSchema);