import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const diary = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/diary' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['生活', '随想', '学习', '旅行']).default('生活'),
    description: z.string().nullish().transform(value => value || ''),
    cover: z.string().nullish(),
    coverAlt: z.string().nullish().transform(value => value || ''),
    draft: z.boolean().default(false),
    sample: z.boolean().default(false),
  }),
});
export const collections = { diary };
