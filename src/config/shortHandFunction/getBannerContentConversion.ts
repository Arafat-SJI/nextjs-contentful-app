export const getBannerContentConversion = (bannerStandardData: any): any => {
  return {
    title: bannerStandardData.fields.headline,
    headerTag: bannerStandardData.fields.headlineSize,
    description: bannerStandardData.fields.richText,
    buttonAction: bannerStandardData.fields.buttonAction,
    mediaPlacement: bannerStandardData.fields.mediaPlacement,
    image: {
      url: bannerStandardData.fields.media.fields.image.fields.file.url,
      alt: bannerStandardData.fields.media.fields.alt,
    }
  };
};
