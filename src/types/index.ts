import { ReactElement } from "react";

export interface SliderSettings {
    // customPaging: (index: number) => ReactElement<any, any>;
    dots: boolean;
    autoplay: boolean,
    infinite: boolean;
    fade: boolean;
    arrows: boolean;
    autoplaySpeed: number;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
    customPagingPosition: string;
    beforeChange?: (current: number, next: number) => void;
}