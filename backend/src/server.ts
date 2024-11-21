// backend/src/server.ts
import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const PORT = 5001;

// Interfaces
export interface User {
  id: number;
  name: string;
  email: string;
}

// Middleware
app.use(cors());
app.use(express.json());

// Mock Database
let users: User[] = [{ id: 1, name: 'John Doe', email: 'john@example.com' }];

// Routes
app.get('/api/users', (req: Request, res: Response) => {
  res.json(users);
});

app.post('/api/users', (req: Request, res: Response) => {
  const newUser: User = {
    id: users.length + 1,
    ...req.body,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
