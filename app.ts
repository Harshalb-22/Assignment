import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import { productsRouter } from './routes/products';

const app: Application = express();
const PORT = 3000;

app.use((req: Request, res: Response, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.use(bodyParser.json());

app.use('/api/products', productsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
