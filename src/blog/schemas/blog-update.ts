import type { z } from "zod";
import { blogSchema } from "./blog.schema.js";

export const blogUpdateSchema = blogSchema.omit({
    id: true,
    createdAt: true,
    slug: true,
});

export type BlogUpdate = z.infer<typeof blogUpdateSchema>;
