import { PAGE_BASE_QUERY_WITH_SLUG } from '@/lib/constant';
import { getPageBaseData } from '../lib/contentful';
import Hero from '@/components/Hero';

const Home = async ({ params }: { params: { slug: string } }) => {
  const page = await getPageBaseData(PAGE_BASE_QUERY_WITH_SLUG(params.slug));

  return (
    <div className='w-full'>
        <Hero heroData={page.fields.genericPage.fields.heroBanner.fields} />
    </div>
  );
};

export default Home;