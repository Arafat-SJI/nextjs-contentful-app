import { createClient } from 'contentful';

if (!process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || !process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN) {
  console.log(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID);
  console.log(process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN);
  throw new Error("Missing Contentful space ID or access token");
}

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string,
});

export const getPageBaseData = async (slug: string): Promise<any> => {
  const response = await client.getEntries<any>({
    content_type: 'pageBase',
    'fields.slug': slug,
    include: 10,
  });
  return response.items[0];
};
