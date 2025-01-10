import { PAGE_BASE_QUERY_WITH_SLUG } from "@/lib/constant/urlConstant";
import { getPageBaseData } from "../lib/contentful";
import { GENERIC_PAGE, HOME_PAGE } from "@/lib/constant/contentTypeConstant";
import { getRootContentType } from "@/config/shortHandFunction/getRootContentType";
import HomePage from "@/components/Layout/HomePage";



const Home = async ({ params }: { params: { slug: string } }) => {
  const page = await getPageBaseData(
    PAGE_BASE_QUERY_WITH_SLUG(params.slug, HOME_PAGE)
  );

  return (
    <div className="w-full">
      {/* // TODO: Add the logic for the home page
          // TODO: contentTypeConversion: get the page type
          // TODO: if page type is home page, then render the home page
          // TODO: if page type is generic page, then render the generic page
          // TODO: pageData.fields.content.sys.contentType.sys.id giving the page type
      */}
      <h1>Home Page</h1>
      {getRootContentType(page) === HOME_PAGE ? <HomePage pageData={page} /> : <></>}
    </div>
  );
};

export default Home;