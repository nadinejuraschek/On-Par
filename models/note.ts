import { Schema, model } from 'mongoose';

interface INoteSchema {
  // TODO: should be Date in the future
  date: string;
  text: string;
  title: string;
}

// SCHEMA SETUP
const notesSchema = new Schema<INoteSchema>({
  date: { type: String, required: true },
  text: { type: String, required: true },
  title: { type: String, required: true },
});

export default model<INoteSchema>('Note', notesSchema);