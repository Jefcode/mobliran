import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';

import productsRouter from './routers/productsRouter';
import connectDB from './config/db';
import { errorHandler, notFound } from './middlewares/errorMiddleware';

dotenv.config();
// connectDB();

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('API Running');
});

app.use('/api/products', productsRouter);

// Middleware for error handling
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(5000, () => console.log(`Server is running on port ${PORT}`));
