import React from "react";
import Hero from "../Hero";
import SliderHero from "../SliderHero";
import { getSliderHeroConversion } from "@/config/shortHandFunction/getSliderHeroConversion";
import BannerStandard from "../BannerStandard";
import { getBannerContentConversion } from "@/config/shortHandFunction/getBannerContentConversion";
import { loadComponents } from "@/config/loadComponents";

const GenericPage = ({ pageData }: { pageData: any }) => {
  return (
    <div className="w-full container mx-auto">
      {getSliderHeroConversion(pageData) ? (
        <SliderHero sliderHeroData={getSliderHeroConversion(pageData)} />
      ) : (
        <></>
      )}
         <h1>{pageData.fields.content.fields.internalName}</h1>
      <div key="generic-page-components">{loadComponents(pageData)}</div>
    </div>
  );
};

export default GenericPage;
