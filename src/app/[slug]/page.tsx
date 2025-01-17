import React from "react";
import Hero from "@/components/Hero";
import { getPageBaseData } from "@/lib/contentful";
import { PAGE_BASE_QUERY_WITH_SLUG } from "@/lib/constant/urlConstant";
import { GENERIC_PAGE, PRODUCT_PAGE } from "@/lib/constant/contentTypeConstant";
import GenericPage from "@/components/Layout/GenericPage";
import ProductPage from "@/components/Layout/ProductPage";
import { getRootContentType } from "@/config/shortHandFunction/getRootContentType";
import { Metadata } from "next";
import { getSeoData } from "@/config/shortHandFunction/getSeoData";


export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const page = await getPageBaseData(
    PAGE_BASE_QUERY_WITH_SLUG(params.slug, GENERIC_PAGE)
  );
  
  return {
    title: getSeoData(page)?.title || 'Page Not Found',
    description: getSeoData(page)?.description || 'Page description',
    openGraph: {
      title: getSeoData(page)?.title || 'Page Not Found',
      description: getSeoData(page)?.description || 'Page description',
      url: getSeoData(page)?.og_url || '/',
      siteName: getSeoData(page)?.og_site_name || 'Site Name',
    },
  };
}

const DynamicRoute = async ({ params }: { params: { slug: string } }) => {
  const pageSlug = params.slug;
  const page = await getPageBaseData(
    PAGE_BASE_QUERY_WITH_SLUG(params.slug, GENERIC_PAGE)
  );

  if (pageSlug && (!page || Object.keys(page).length === 0)) {
    return <div>Page not found</div>;
  }

  return (
    <div>
      {/* // TODO: Add the logic for the home page
          // TODO: contentTypeConversion: get the page type
          // TODO: if page type is home page, then render the home page
          // TODO: if page type is generic page, then render the generic page
          // TODO: pageData.fields.content.sys.contentType.sys.id giving the page type
      */}
      {getRootContentType(page) === GENERIC_PAGE ? <GenericPage pageData={page} /> : <></>}
      {getRootContentType(page) === PRODUCT_PAGE ? <ProductPage pageData={page} /> : <></>}
    </div>
  );
};

export default DynamicRoute;
