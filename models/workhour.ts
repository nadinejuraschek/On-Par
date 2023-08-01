import { Schema, model } from 'mongoose';

interface IWorkhourSchema {
  date: Date;
  hours: THours[];
  total: number;
}

type THours = {
  duration: number;
  end: Date;
  start: Date;
};

// SCHEMA SETUP
const workSchema = new Schema<IWorkhourSchema>({
  date: { type: Date, required: true },
  hours: [
    {
      start: { type: Date, required: true },
      end: { type: Date, required: true },
      duration: { type: Number, required: true },
    },
  ],
  total: { type: Number, required: true },
});

export default model<IWorkhourSchema>('Workhour', workSchema);
