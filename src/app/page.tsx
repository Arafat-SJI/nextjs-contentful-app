import { PAGE_BASE_QUERY_WITH_SLUG } from '@/lib/constant';
import { getPageBaseData } from '../lib/contentful';
import SliderHero from '@/components/SliderHero';

const Home = async ({ params }: { params: { slug: string } }) => {
  const page = await getPageBaseData(PAGE_BASE_QUERY_WITH_SLUG(params.slug));
  // const pageInternalName = page.fields.genericPage.fields.internalName;
  // const bannerInternalName = page.fields.genericPage.fields.topSection.fields.internalName;
  const sliderHeroData = page?.fields?.genericPage?.fields?.topSection?.fields?.sliderImage;
  const sliderCongig = page?.fields?.genericPage?.fields?.topSection?.fields;
  const autoImageChange = sliderCongig.autoImageChange;
  const imageIndicatorButton = sliderCongig.imageIndicatorButton;
  const sliderControllerButton = sliderCongig.sliderControllerButton;
  const fadeChange = sliderCongig.fadeChange;
  const infiniteImageChange = sliderCongig.infiniteImageChange;
  const autoplaySpeed = sliderCongig.autoplaySpeed;
  const imageChangeSpeed = sliderCongig.imageChangeSpeed;
  // console.log(sliderCongig)


  return (
    <div className='w-full'>
      <SliderHero
        sliderHeroData={sliderHeroData}
        autoImageChange={autoImageChange}
        imageIndicatorButton={imageIndicatorButton}
        sliderControllerButton={sliderControllerButton}
        fadeChange={fadeChange}
        infiniteImageChange={infiniteImageChange}
        autoplaySpeed={autoplaySpeed}
        imageChangeSpeed={imageChangeSpeed}
      />
    </div>
  );
};

export default Home;