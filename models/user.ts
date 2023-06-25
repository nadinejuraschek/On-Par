import { Schema, model } from 'mongoose';

interface IUserSchema {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  role?: string | null;
  country: string;
  familyID: string;
  // TODO: should be of type Date
  startDate: any;
  // TODO: should be of type Date
  endDate: any;
  // TODO: determine type
  workhours: any[];
  // TODO: determine type
  payments: any[];
  // TODO: determine type
  goals: any[];
  // TODO: determine type
  notes: any[];
  // TODO: determine type
  profileImage?: any | null;
  // TODO: should be of type Date
  birthday?: any | null;
  location?: string | null;
  permissions: {
    shareBirthday: boolean;
    shareEmail: boolean;
    shareLastName: boolean;
  }
}

// SCHEMA SETUP
const userSchema = new Schema<IUserSchema>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: true },

  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  role: String,
  country: { type: String, required: true },

  familyID: {
    type: String,
    required: true,
    unique: true,
  },

  startDate: { type: Object, required: true },
  endDate: { type: Object, required: true },

  workhours: [{ type: Schema.Types.ObjectId, ref: 'Workhour' }],
  payments: [{ type: Schema.Types.ObjectId, ref: 'Payment' }],
  goals: [{ type: Schema.Types.ObjectId, ref: 'Goal' }],
  notes: [{ type: Schema.Types.ObjectId, ref: 'Note' }],

  profileImage: { img: { data: Buffer, contentType: String } },

  birthday: Object,

  location: String,

  permissions: {
    shareBirthday: { type: Boolean, require: true },
    shareEmail: { type: Boolean, require: true },
    shareLastName: { type: Boolean, require: true },
  }
});

export default model<IUserSchema>('User', userSchema);
