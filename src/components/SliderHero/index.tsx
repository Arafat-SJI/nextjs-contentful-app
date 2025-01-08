'use client'
import Image from 'next/image'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { toAbsoluteUrl } from '@/utils/urlHelper'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { SliderSettings } from '@/types';



const SliderHero = ({ sliderHeroData, autoImageChange, imageIndicatorButton, sliderControllerButton, fadeChange, infiniteImageChange, autoplaySpeed, imageChangeSpeed }: {
    sliderHeroData: any[];
    autoImageChange: boolean;
    imageIndicatorButton: boolean;
    sliderControllerButton: boolean;
    fadeChange: boolean;
    infiniteImageChange: boolean;
    autoplaySpeed: number;
    imageChangeSpeed: number;
}) => {

    sliderHeroData.forEach((item: any, index: any) => {
        // const imageUrl = item?.fields?.media?.fields?.image?.fields?.file?.url;
        // const imageTitle = item?.fields?.title;
        // const imageDescription = item?.fields?.body?.content[0].content[0].value;
        // console.log(imageUrl)
        // console.log(imageTitle)
        // console.log(imageDescription)
        // console.log(autoImageChange)
        // console.log(imageIndicatorButton)
        // console.log(sliderControllerButton)
    });


    const settings: SliderSettings = {
        dots: imageIndicatorButton || false,
        autoplay: autoImageChange || false,
        arrows: sliderControllerButton || false,
        fade: fadeChange || false,
        infinite: infiniteImageChange || false,
        autoplaySpeed: autoplaySpeed || 2000,
        speed: imageChangeSpeed || 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className='flex justify-center items-center my-10'>
            <div className='w-[650px]  px-10'>
                <div className="slider-container">
                    <Slider {...settings}>
                        {sliderHeroData.map((item: any, index: any) => {
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
