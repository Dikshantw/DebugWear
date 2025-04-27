import { productSchema } from '@/lib/validators';
import { z } from 'zod';

export type Product = z.infer<typeof productSchema> & {
    id: string;
    rating: string;
    createdAt: Date;
}