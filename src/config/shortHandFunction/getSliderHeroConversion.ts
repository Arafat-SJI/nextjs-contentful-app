export const getSliderHeroConversion = (sliderHeroData: any) => {
  const heroData = sliderHeroData.fields.content.fields.topSection;
    if (Object.keys(heroData).length > 0) {
      return {
        sliders: heroData.fields?.sliderImage,
        autoImageChange: heroData.fields?.autoImageChange,
        imageIndicatorButton: heroData.fields?.imageIndicatorButton,
        sliderControllerButton: heroData.fields?.sliderControllerButton,
        fadeChange: heroData.fields?.fadeChange,
        infiniteImageChange: heroData.fields?.infiniteImageChange,
        autoplaySpeed: heroData.fields?.autoplaySpeed,
        imageChangeSpeed: heroData.fields?.imageChangeSpeed,
        customPagingPosition: heroData.fields?.customPagingPosition,
      };
    }
};
