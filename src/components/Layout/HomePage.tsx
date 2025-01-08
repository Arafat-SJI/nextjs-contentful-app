import { getSliderHeroConversion } from '@/config/shortHandFunction/getSliderHeroConversion'
import React from 'react'
import SliderHero from '../SliderHero'

const HomePage = ({pageData}: {pageData: any}) => {
  return (
    <div>
      <SliderHero sliderHeroData={getSliderHeroConversion(pageData)} />
    </div>
  )
}

export default HomePage