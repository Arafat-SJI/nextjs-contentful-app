import { getPageBaseData } from '../lib/contentful';
import { FC } from 'react';
import Image from 'next/image';
import { toAbsoluteUrl } from '@/utils/urlHelper';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Home = async ({ params }: { params: { slug: string } }) => {
  const page = await getPageBaseData(params.slug);

  return (
    <div>
      {JSON.stringify(page)}
      <h1>{page?.fields?.internalName}</h1>
    </div>
  );
};

export default Home;