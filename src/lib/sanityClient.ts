

import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
  projectId: 'kbn570x8',
  dataset: 'production', // or whatever dataset you use
  useCdn: true, // `true` for faster, cached response
  apiVersion: '2023-04-01', // use today's date
});
const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}