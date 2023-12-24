import express, { Router, Request, Response } from 'express';

const productsRouter: Router = express.Router();

let products = [
  { id: 1, name: 'Product 1', price: 10.99 },
  { id: 2, name: 'Product 2', price: 20.99 },
];

productsRouter.get('/', (req: Request, res: Response) => {
  res.json(products);
});

productsRouter.get('/:id', (req: Request, res: Response) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

productsRouter.post('/', (req: Request, res: Response) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.status(201).json(newProduct);
});

productsRouter.put('/:id', (req: Request, res: Response) => {
  const productId = parseInt(req.params.id);
  const updatedProduct = req.body;

  products = products.map((p) => (p.id === productId ? updatedProduct : p));

  res.json(updatedProduct);
});

productsRouter.delete('/:id', (req: Request, res: Response) => {
  const productId = parseInt(req.params.id);
  products = products.filter((p) => p.id !== productId);
  res.json({ message: 'Product deleted successfully' });
});

export { productsRouter };
