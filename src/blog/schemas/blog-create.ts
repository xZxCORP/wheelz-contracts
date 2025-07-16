import type { z } from "zod";
import { blogSchema } from "./blog.schema.js";

export const blogCreateSchema = blogSchema.omit({
    id: true,
    createdAt: true,
    slug: true,
});

export type BlogCreate = z.infer<typeof blogCreateSchema>;
