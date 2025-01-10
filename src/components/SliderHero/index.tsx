'use client'
import React, { useEffect, useRef, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { toAbsoluteUrl } from '@/utils/urlHelper'
import { SliderSettings } from '@/types';

const SliderHero = ({ sliderHeroData }: {
    sliderHeroData: any;
}) => {
    const sliderRef = useRef<Slider | null>(null);
    const [activeIndex, setActiveIndex] = useState<number>(0)

    useEffect(() => {
        console.log(sliderHeroData);
    }, [sliderHeroData]);

    const settings: SliderSettings = {
        dots: sliderHeroData.imageIndicatorButton || false,
        autoplay: sliderHeroData.autoImageChange || false,
        arrows: sliderHeroData.sliderControllerButton || false,
        fade: sliderHeroData.fadeChange || false,
        infinite: sliderHeroData.infiniteImageChange || false,
        autoplaySpeed: sliderHeroData.autoplaySpeed || 2000,
        speed: sliderHeroData.imageChangeSpeed || 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPagingPosition: sliderHeroData.customPagingPosition || 'Bottom',
        beforeChange: (current: number, next: number) => setActiveIndex(next)
    };

    const handleThumbnailClick = (index: number) => {
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(index);
            setActiveIndex(index);
        }
    };

    const thumbnailPositionClass = () => {
        switch (settings.customPagingPosition) {
            case 'Top':
                return 'flex flex-col';
            case 'Bottom':
                return 'flex flex-col';
            case 'Left':
                return 'flex';
            case 'Right':
                return 'flex';
            default:
                return 'flex flex-col';
        }
    };
    const thumbnailOrder = () => {
        switch (settings.customPagingPosition) {
            case 'Top':
                return 'order-2';
            case 'Bottom':
                return 'order-1';
            case 'Left':
                return 'order-2';
            case 'Right':
                return 'order-1';
            default:
                return 'order-1';
        }
    };
    console.log(settings.customPagingPosition)
    const imageAlignment = () => {
        switch (settings.customPagingPosition) {
            case 'Left':
                return 'flex-col';
            case 'Right':
                return 'flex-col';
            default:
                return 'flex';
        }
    };
// ${thumbnailOrder()}
    return (
        <div className='mt-2'>
            <div>
                <div className={` ${thumbnailPositionClass()}`}>
                    <div className={`w-full h-[580px] ${thumbnailOrder()}`}>
                        <Slider ref={sliderRef} {...settings}>
                            {sliderHeroData?.sliders?.map((item: any, index: any) => {
                                const entryID = item?.sys?.id;
                                const imgAlt = item?.fields?.media?.fields?.alt;
                                const imageUrl = item?.fields?.media?.fields?.image?.fields?.file?.url;
                                const imageTitle = item?.fields?.title;
                                const imageDescription = item?.fields?.description?.content[0].content[0].value;
                                return (
                                    <div key={entryID} className="relative">
                                        <div>
                                            {imageUrl && (
                                                <img
                                                    src={toAbsoluteUrl(imageUrl)}
                                                    alt={imgAlt}
                                                    className='w-full h-[580px]'
                                                />
                                            )}
                                        </div>
                                        <div className="absolute bottom-0 left-0 w-full pb-1 bg-black bg-opacity-60 flex flex-col items-center text-white">
                                            {imageTitle && <p className="text-center text-2xl font-bold">{imageTitle}</p>}
                                            {imageDescription && <p className="text-center text-sm">{imageDescription}</p>}
                                        </div>
                                    </div>
                                );
                            })}
                        </Slider>
                    </div>
                    <div className={`thumbnails flex  justify-center mt-4 mb-4 ${imageAlignment()} `}>
                        {sliderHeroData?.sliders?.map((item: any, index: any) => {
                            const thumbnailUrl = toAbsoluteUrl(item?.fields?.media?.fields?.image?.fields?.file?.url);
                            return (
                                <div
                                    key={index}
                                    className={`h-12 w-20 m-1 cursor-pointer ${activeIndex === index ? 'p-[1px] border-2 border-black' : ''}`}
                                    onClick={() => handleThumbnailClick(index)}
                                >
                                    <img
                                        src={thumbnailUrl}
                                        className='h-full w-full'
                                        alt={`Slide ${index + 1} Thumbnail`}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

        </div>


    )
}

export default SliderHero;
