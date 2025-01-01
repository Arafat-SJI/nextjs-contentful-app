import { toAbsoluteUrl } from '@/utils/urlHelper'
import Image from 'next/image'
import React from 'react'

const Hero = ({ heroData }: any) => {
    return (
        <div className="w-full h-screen relative bg-[url('/images/hero-bg.svg')] bg-no-repeat bg-center bg-cover bg-fixed">
            <nav className='h-[80px] w-full'></nav>
            <div className='container mx-auto z-55'>
                <div className='w-full h-full mt-20 grid grid-cols-2'>
                    <div className='w-full h-full flex items-center'>
                        {heroData?.title ? <h1 className='text-6xl leading-[72px] font-bold text-black'>{heroData?.title}</h1> : <></>}
                        
                    </div>
                    <div>
                        <Image src={toAbsoluteUrl(heroData?.media?.fields?.image.fields.file?.url)} width={100} height={100} className='w-full h-[650px]' alt=''/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
