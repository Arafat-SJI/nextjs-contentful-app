import React from "react";
import Hero from "@/components/Hero";
import { getPageBaseData } from "@/lib/contentful";

const DynamicRoute = async ({ params }: { params: { slug: string } }) => {
  const pageSlug = params.slug;
  const page = await getPageBaseData(pageSlug);
  const heroData = page.fields.genericPage.fields.heroBanner.fields;

  if (pageSlug && (!page || Object.keys(page).length === 0)) {
    return <div>Page not found</div>;
  }

  return (
    <div>
      <h1>Current Path: {JSON.stringify(page)}</h1>
        <Hero heroData={heroData} />
    </div>
  );
};

export default DynamicRoute;