import { Response } from 'express';

export const handleUnknownUser = (res: Response, id?: string) => {
  if (!id) return res.status(403).json("Please log in to use this feature.");
}