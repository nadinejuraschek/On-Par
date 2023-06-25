import { Schema, model } from 'mongoose';

interface IGoalSchema {
  checked: boolean;
  dueDate: Date;
  text: string;
  type: string;
}

// SCHEMA SETUP
const goalSchema = new Schema<IGoalSchema>({
  checked: { type: Boolean, required: true, default: false },
  dueDate: { type: Date, required: true },
  text: { type: String, required: true },
  type: { type: String, required: true, default: 'personal' },
});

export default model<IGoalSchema>('Goal', goalSchema);