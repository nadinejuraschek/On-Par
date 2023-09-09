import { Response } from 'express';

export const isValidUser = (res: Response, id?: string) => {
  if (!id) return false;
  return true;
}