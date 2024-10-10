import { z } from 'zod';

export const transactionActionSchema = z.enum(['create', 'update', 'delete']);
