import {
  Document,
  Schema,
  Model,
  model,
} from 'mongoose';

import { IExample } from './example.interface';

export interface IExampleModel extends IExample, Document { }

export const ExampleSchema: Schema = new Schema({
  string: { type: String, required: true },
  optionalNumber: Number,
  stringArray: { type: [String], required: true },
  date: Date,
});

ExampleSchema.pre('save', next => {
  if (!this.date) {
    this.date = Date.now;
  }

  next();
});

export const Example: Model<IExampleModel> = model<IExampleModel>('Example', ExampleSchema);
