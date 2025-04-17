// routes/projects/individualProjects/+page.js
import { client } from '$lib/sanityClient';

export async function load() {
  const query = `*[_type == "post"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    mainImage {
      asset->{
        url
      }
    },
    excerpt,
    body
  }`;

  const posts = await client.fetch(query);
  return { posts };
}
