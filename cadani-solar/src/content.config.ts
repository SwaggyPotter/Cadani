import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    draft: z.boolean().default(true),
    tags: z.array(z.string()).default([]),
  }),
});

const faq = defineCollection({
  type: 'data',
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    category: z.string().optional(),
  }),
});

const references = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    location: z.string(),
    region: z.string(),
    draft: z.boolean().default(true),
  }),
});

const regions = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    state: z.enum(['Berlin', 'Brandenburg']),
    draft: z.boolean().default(true),
  }),
});

export const collections = {
  blog,
  faq,
  references,
  regions,
};
