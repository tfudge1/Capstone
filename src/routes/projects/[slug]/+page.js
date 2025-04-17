// src/routes/projects/[slug]/+page.js
import { client } from '$lib/sanityClient';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const { slug } = params;

  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    mainImage {
      asset->{
        url
      }
    },
    body
  }`;

  const post = await client.fetch(query, { slug });

  if (!post) {
    throw new Error(`Post not found for slug: ${slug}`);
  }

  return { post };
}
