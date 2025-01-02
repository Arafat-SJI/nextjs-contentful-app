import { getPageBaseData } from '../lib/contentful';
import { FC } from 'react';
import Image from 'next/image';
import { toAbsoluteUrl } from '@/utils/urlHelper';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Hero from '@/components/Hero';

const Home = async ({ params }: { params: { slug: string } }) => {
  const page = await getPageBaseData(params.slug);

  return (
    <div className='w-full'>
      {/* {JSON.stringify(page.fields.genericPage.fields.heroBanner.fields)} */}
        <Hero heroData={page.fields.genericPage.fields.heroBanner.fields} />
    </div>
  );
};

export default Home;