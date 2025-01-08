'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { toAbsoluteUrl } from '@/utils/urlHelper'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { SliderSettings } from '@/types';



const SliderHero = ({ sliderHeroData }: {
    sliderHeroData: any;
}) => {


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
    };

    return (
        <div className='flex justify-center items-center my-10'>
            <div className='w-[650px]  px-10'>
                <div className="slider-container">
                    <Slider {...settings}>
                        {sliderHeroData?.sliders?.map((item: any, index: any) => {
                            const entryID = item?.sys?.id;
                            const imgAlt = item?.fields?.media?.fields?.alt;
                            const imageUrl = item?.fields?.media?.fields?.image?.fields?.file?.url;
                            const imageTitle = item?.fields?.title;
                            const imageDescription = item?.fields?.description?.content[0].content[0].value;
                            return (
                                <div key={entryID} className="">
                                    <div>
                                        {imageUrl && (
                                            <img
                                                src={toAbsoluteUrl(imageUrl)}
                                                alt={imgAlt}
                                                className='w-full'
                                            />
                                        )}
                                    </div>
                                    <div>
                                        {imageTitle && <p className="text-center text-2xl font-bold">{imageTitle}</p>}
                                        {imageDescription && <p className="text-center text-sm">{imageDescription}</p>}
                                    </div>
                                </div>
                            );
                        })}

                    </Slider>
                </div>
            </div>
        </div> 

    
    )
}

export default SliderHero;
