import {z} from 'zod';

export const productSchema = z.object({
    name: z.string().min(3,'Name must be at least 3 characters'),
    slug: z.string().min(3,'Slug must be at least 3 characters'),
    category: z.string().min(3, 'Category must be at least 3 characters'),
    description: z.string().min(3, 'Description must be at least 3 characters'),
    stock: z.coerce.number(),
    images: z.array(z.string()).min(1, 'Product must have at least 1 image'),
    banner: z.string().nullable(),
    price: z.string()
})