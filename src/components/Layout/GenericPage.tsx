import React from "react";
import Hero from "../Hero";
import SliderHero from "../SliderHero";
import { getSliderHeroConversion } from "@/config/shortHandFunction/getSliderHeroConversion";

const GenericPage = ({ pageData }: { pageData: any }) => {

  return (
    <div>
      <SliderHero sliderHeroData={getSliderHeroConversion(pageData)} />
      <h1>{pageData.fields.content.fields.internalName}</h1>
    </div>
  );
};

export default GenericPage;
