
import { FC } from 'react';
import Hero from '@/components/Hero';
import Layout from '@/components/Layout/Layout';
import { getPageBaseData } from '@/lib/contentful';

const Home = async ({ params }: { params: { slug: string } }) => {
  const page = await getPageBaseData(params.slug);

  return (
    <Layout>
      <Hero heroData={page.fields.genericPage.fields.heroBanner.fields} />
    </Layout>
  );
};

export default Home;