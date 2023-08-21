import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'cls7b9zj',
  dataset: 'production',
  apiVersion: '2021-11-16',
  useCdn: true,
  token:'skWEc9OzJbzy0YGVGZGHZBqexwhZjAnSot6zzOBpRooNzuV9Dv56JekiSRXs1lZMzZvktPHBpvqLq9dnHXCIMrb8S6lqhn8jPt7KAVMuikwQ5dTCD7lnfjafsBWZatXIFtwxCNWiQQy5fdAvLy3bkdj3ZypdLOC4hnFw8driFoF7sRKeIqg6',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);