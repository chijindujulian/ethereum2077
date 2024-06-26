import {defineCollection, z} from "astro:content";

const postsCollection = defineCollection({
   schema: ({image}) => z.object({
       author: z.string(),
       date: z.string(),
       image: image(),
       title: z.string(),
       categories: z.array(z.string()),
   }),
});

export const collections = {
   posts: postsCollection,
};