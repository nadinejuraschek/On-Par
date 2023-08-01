import { connect, connection } from 'mongoose';
import express, { NextFunction, Request, Response } from 'express';

import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import goalRoutes from './routes/goalRoutes';
import jwt from 'jsonwebtoken';
import mongoSanitize from 'express-mongo-sanitize';
import morgan from 'morgan';
import noteRoutes from './routes/noteRoutes';
import path from 'path';
import paymentRoutes from './routes/paymentRoutes';
import userRoutes from './routes/userRoutes';
import workhourRoutes from './routes/workhourRoutes';

declare module "express-serve-static-core" {
  interface Request {
    user?: string;
  }
}

const app = express();
dotenv.config();

// MORGAN - HTTP REQUEST LOGGER
app.use(morgan('tiny'));

// DATABASE
connect(process.env.MONGO_URI || '', {});
connection.on('connected', () => {
  console.log('Mongoose is connected.');
});

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// SECURITY
app.use(mongoSanitize());

// AUTHENTICATION
// decode the jwt token
app.use((req: Request, res: Response, next: NextFunction) => {
  const { token } = req.cookies;

  if (token && process.env.APP_SECRET) {
    // get the verified userID from jwt
    const verified = jwt.verify(token, process.env.APP_SECRET);
    const id = typeof verified !== 'string' ? verified.id : verified;
    // set that userId on the request object
    req.user = id;
  }
  // carry on the request after the middleware
  next();
});

// ROUTES
app.use('/api', noteRoutes);
app.use('/api', goalRoutes);
app.use('/api', paymentRoutes);
app.use('/api', workhourRoutes);
app.use('/api/user', userRoutes);

// DEPLOYMENT
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// If no API routes are hit, send the React app
app.use((req: Request, res: Response) =>
  res.sendFile(path.join(__dirname, './client/build/index.html'))
);

// SERVER
app.listen(process.env.PORT, () => {
  console.log('Server is listening on PORT ' + process.env.PORT + '.');
});
