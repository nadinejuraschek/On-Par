import { Schema, model } from 'mongoose';

interface IWorkhourSchema {
  // TODO: should be Date in the future
  date: any;
  dateFormat: string;
  hours: THours[];
  total: number;
}

type THours = {
  duration: number;
  // TODO: should be Date in the future
  end: any;
  // TODO: should be Date in the future
  start: any;
};

// SCHEMA SETUP
const workSchema = new Schema<IWorkhourSchema>({
  date: { type: Object, required: true },
  dateFormat: { type: String, required: true },
  hours: [
    {
      start: { type: Object, required: true },
      end: { type: Object, required: true },
      duration: { type: Number, required: true },
    },
  ],
  total: { type: Number, required: true },
});

export default model<IWorkhourSchema>('Workhour', workSchema);
